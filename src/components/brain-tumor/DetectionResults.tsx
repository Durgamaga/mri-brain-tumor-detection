"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Brain,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Download,
  Share2,
} from "lucide-react";
import { DetectionResult } from "@/app/brain-tumor-detection/page";
import { Progress } from "@/components/ui/progress";

interface DetectionResultsProps {
  originalImage: string;
  results: DetectionResult;
  onReset: () => void;
}

export default function DetectionResults({
  originalImage,
  results,
  onReset,
}: DetectionResultsProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = results.processedImage;
    link.download = "tumor-detection-result.png";
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Status Alert */}
      <Alert
        className={
          results.tumorDetected
            ? "border-red-500 bg-red-50 dark:bg-red-950/20"
            : "border-green-500 bg-green-50 dark:bg-green-950/20"
        }
      >
        {results.tumorDetected ? (
          <AlertCircle className="h-5 w-5 text-red-600" />
        ) : (
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        )}
        <AlertDescription
          className={
            results.tumorDetected
              ? "text-red-800 dark:text-red-200"
              : "text-green-800 dark:text-green-200"
          }
        >
          <strong>
            {results.tumorDetected
              ? "Potential Tumor Detected"
              : "No Tumor Detected"}
          </strong>
          {" - "}
          {results.tumorDetected
            ? "Abnormal regions have been identified. Please consult a medical professional immediately."
            : "The scan appears normal. However, always follow up with your healthcare provider."}
        </AlertDescription>
      </Alert>

      {/* Images Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Original Image */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 text-center">Original MRI</h3>
          <img
            src={originalImage}
            alt="Original MRI"
            className="w-full h-64 object-cover rounded-lg"
          />
        </Card>

        {/* Processed Image */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 text-center">Detected Regions</h3>
          <img
            src={results.processedImage}
            alt="Processed MRI"
            className="w-full h-64 object-cover rounded-lg"
          />
        </Card>

        {/* Heatmap */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 text-center">Probability Heatmap</h3>
          <img
            src={results.heatmapImage}
            alt="Heatmap"
            className="w-full h-64 object-cover rounded-lg"
          />
        </Card>
      </div>

      {/* Analysis Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Confidence Score */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-lg">Confidence Score</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Detection Confidence</span>
              <span className="font-bold">{results.confidence}%</span>
            </div>
            <Progress value={results.confidence} className="h-3" />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {results.confidence >= 80
                ? "High confidence detection"
                : results.confidence >= 60
                ? "Moderate confidence detection"
                : "Low confidence detection"}
            </p>
          </div>
        </Card>

        {/* Tumor Information */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-lg">Tumor Information</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
              <Badge variant="outline" className="mt-1">
                {results.tumorType}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Region</p>
              <p className="font-semibold">{results.region}</p>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-lg">Recommendations</h3>
          </div>
          <ul className="space-y-2">
            {results.recommendations.map((rec, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-green-600 mt-0.5">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button onClick={onReset} size="lg" variant="outline">
          <RefreshCw className="w-5 h-5 mr-2" />
          Analyze Another Scan
        </Button>
        <Button onClick={handleDownload} size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          Download Results
        </Button>
        <Button size="lg" variant="outline" disabled>
          <Share2 className="w-5 h-5 mr-2" />
          Share with Doctor
        </Button>
      </div>
    </div>
  );
}
