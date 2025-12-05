import { Brain, Shield, Zap, Users, AlertTriangle, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/brain-tumor-detection">
              <Button>Try Detection Tool</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About NeuroDetect AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An educational demonstration of AI-powered medical image analysis for 
            brain tumor detection using MRI scans
          </p>
        </div>

        {/* Medical Disclaimer */}
        <Alert className="mb-12 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="text-amber-800 dark:text-amber-200">
            <strong className="block mb-2 text-lg">Important Medical Disclaimer</strong>
            This tool is designed for <strong>educational and demonstration purposes ONLY</strong>. 
            It does NOT provide actual medical diagnosis and should NEVER be used as a substitute 
            for professional medical advice, diagnosis, or treatment. The results generated are 
            simulated and not based on real medical AI models. Always seek the advice of qualified 
            healthcare professionals for any medical concerns.
          </AlertDescription>
        </Alert>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            What This Tool Does
          </h2>
          <Card className="p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              NeuroDetect AI demonstrates how artificial intelligence and machine learning 
              can be applied to medical imaging for brain tumor detection. The tool simulates 
              the process of:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Analyzing MRI brain scan images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Identifying potential tumor regions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Generating confidence scores and visualizations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Creating heatmaps to highlight areas of concern</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg">Fast Processing</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Simulates real-time image analysis with results in seconds
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg">Visual Analysis</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Highlights detected regions and creates probability heatmaps
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-lg">Privacy First</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                All processing happens in your browser - no data sent to servers
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-semibold text-lg">Educational</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about AI in medical imaging through interactive demonstration
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Upload Image</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select an MRI scan image from your device or choose from sample images
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The system simulates analyzing the image for potential tumor regions 
                    using pattern recognition algorithms
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">View Results</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Review the analysis with highlighted regions, confidence scores, and 
                    educational information about the findings
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Limitations & Considerations
          </h2>
          <Card className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">⚠</span>
                <span>This is a demonstration tool with simulated AI capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">⚠</span>
                <span>Results are generated for educational purposes and are not medically accurate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">⚠</span>
                <span>Real medical AI requires extensive training on validated datasets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">⚠</span>
                <span>Medical imaging analysis must always be performed by qualified radiologists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">⚠</span>
                <span>AI in medicine should augment, not replace, professional medical judgment</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <h2 className="text-2xl font-bold mb-3">Ready to Try?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experience the demonstration with sample MRI images
            </p>
            <Link href="/brain-tumor-detection">
              <Button size="lg">
                <Brain className="w-5 h-5 mr-2" />
                Try Detection Tool
              </Button>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  );
}
