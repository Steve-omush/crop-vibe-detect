import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Upload, Brain, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">CropCare AI</span>
          </div>
          <Link to="/auth">
            <Button variant="outline">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Detect Crop Diseases
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                With AI Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload a photo of your crop leaf and get instant disease identification,
              treatment recommendations, and agricultural tips powered by advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-hero">
                  Start Free Detection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>1. Upload Image</CardTitle>
                  <CardDescription>
                    Take or upload a clear photo of the affected crop leaf
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>2. AI Analysis</CardTitle>
                  <CardDescription>
                    Our AI model analyzes the image and identifies potential diseases
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>3. Get Results</CardTitle>
                  <CardDescription>
                    Receive detailed diagnosis with treatment recommendations
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Free Tier Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Fast disease detection with confidence scores",
                "Detailed disease descriptions and causes",
                "Treatment recommendations for each disease",
                "Mobile-friendly interface for field use",
                "Instant AI-powered analysis",
                "Agriculture tips and best practices"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Protect Your Crops?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join farmers worldwide using AI to maintain healthy crops
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="shadow-strong">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">CropCare AI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 CropCare AI. Helping farmers grow healthier crops.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
