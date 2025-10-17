import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Leaf, RefreshCw } from "lucide-react";
import { DetectionResult } from "@/pages/Detect";

interface ResultDisplayProps {
  result: DetectionResult;
  image: string | null;
  onReset: () => void;
}

const ResultDisplay = ({ result, image, onReset }: ResultDisplayProps) => {
  return (
    <div className="space-y-6">
      {/* Image and Main Result */}
      <Card className="shadow-medium">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Uploaded Image */}
            {image && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Analyzed Image</h3>
                <img
                  src={image}
                  alt="Uploaded crop"
                  className="w-full h-64 object-cover rounded-lg border border-border"
                />
              </div>
            )}

            {/* Detection Result */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                {result.isHealthy ? (
                  <CheckCircle className="h-8 w-8 text-success flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-warning flex-shrink-0" />
                )}
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {result.disease}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant={result.isHealthy ? "default" : "destructive"}>
                      {result.confidence}% Confidence
                    </Badge>
                    <Badge variant="outline">
                      {result.isHealthy ? "Healthy" : "Disease Detected"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Causes */}
      {result.causes.length > 0 && (
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Common Causes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.causes.map((cause, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{cause}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Remedies */}
      {result.remedies.length > 0 && (
        <Card className="shadow-soft border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Recommended Treatment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.remedies.map((remedy, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{remedy}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Reset Button */}
      <div className="flex justify-center">
        <Button onClick={onReset} variant="outline" size="lg">
          <RefreshCw className="h-4 w-4 mr-2" />
          Analyze Another Image
        </Button>
      </div>
    </div>
  );
};

export default ResultDisplay;
