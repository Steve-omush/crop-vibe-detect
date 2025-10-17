import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Upload, LogOut, Loader2 } from "lucide-react";
import { toast } from "sonner";
import UploadZone from "@/components/UploadZone";
import ResultDisplay from "@/components/ResultDisplay";

export interface DetectionResult {
  disease: string;
  confidence: number;
  description: string;
  causes: string[];
  remedies: string[];
  isHealthy: boolean;
}

const Detect = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleImageUpload = async (file: File) => {
    setLoading(true);
    setResult(null);

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64Image = reader.result as string;
        setUploadedImage(base64Image);

        // Call the detection edge function
        const { data, error } = await supabase.functions.invoke('detect-disease', {
          body: { image: base64Image }
        });

        if (error) {
          if (error.message.includes('429')) {
            toast.error("Rate limit exceeded. Please try again in a moment.");
          } else if (error.message.includes('402')) {
            toast.error("AI service limit reached. Please contact support.");
          } else {
            toast.error("Failed to analyze image. Please try again.");
          }
          return;
        }

        setResult(data);
        toast.success("Analysis complete!");
      };

      reader.onerror = () => {
        toast.error("Failed to read image file");
      };
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setUploadedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">CropCare AI</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Crop Disease Detection
            </h1>
            <p className="text-muted-foreground">
              Upload a photo of your crop leaf for instant AI analysis
            </p>
          </div>

          {!result ? (
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Upload Crop Image
                </CardTitle>
                <CardDescription>
                  Take a clear photo of the affected leaf for best results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UploadZone onImageUpload={handleImageUpload} disabled={loading} />
                {loading && (
                  <div className="mt-6 flex items-center justify-center gap-3 text-primary">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Analyzing image with AI...</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <ResultDisplay
              result={result}
              image={uploadedImage}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Detect;
