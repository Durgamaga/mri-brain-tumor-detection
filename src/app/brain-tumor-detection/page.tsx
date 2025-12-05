"use client";

import { useState } from "react";
import { Upload, Info, Brain, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import ImageUploader from "@/components/brain-tumor/ImageUploader";
import DetectionResults from "@/components/brain-tumor/DetectionResults";
import { analyzeMRI } from "@/lib/tumor-detection";

export interface DetectionResult {
  confidence: number;
  tumorDetected: boolean;
  tumorType: string;
  region: string;
  recommendations: string[];
  processedImage: string;
  heatmapImage: string;
}

export default function BrainTumorDetection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<DetectionResult | null>(null);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setResults(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Run detection algorithm
    const detectionResults = await analyzeMRI(selectedImage);
    setResults(detectionResults);
    setIsAnalyzing(false);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                NeuroDetect AI
              </span>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="sm">
                <Info className="w-4 h-4 mr-2" />
                About
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Medical Disclaimer */}
        <Alert className="mb-6 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800 dark:text-amber-200">
            <strong>Medical Disclaimer:</strong> This tool is for educational and demonstration purposes only. 
            It is NOT a substitute for professional medical diagnosis. Always consult with qualified healthcare 
            professionals for medical advice and diagnosis.
          </AlertDescription>
        </Alert>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Brain Tumor Detection
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upload an MRI scan to analyze and detect potential brain tumor regions using 
            advanced AI-powered image analysis
          </p>
        </div>

        {!selectedImage ? (
          <ImageUploader onImageSelect={handleImageSelect} />
        ) : !results ? (
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col items-center">
                <img
                  src={selectedImage}
                  alt="Selected MRI"
                  className="max-w-full h-auto max-h-96 rounded-lg mb-6"
                />
                <div className="flex gap-4">
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    size="lg"
                    className="min-w-[200px]"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain className="w-5 h-5 mr-2" />
                        Analyze MRI Scan
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    disabled={isAnalyzing}
                  >
                    Choose Different Image
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <DetectionResults
            originalImage={selectedImage}
            results={results}
            onReset={handleReset}
          />
        )}

        {/* Features Section */}
        {!selectedImage && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Upload</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Simply drag and drop or select your MRI scan image
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Advanced algorithms analyze the scan in seconds
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Detailed Results</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get comprehensive analysis with confidence scores
              </p>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
