import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Upload, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                NeuroDetect AI
              </span>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/brain-tumor-detection">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 animate-pulse">
            <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            AI-Powered Brain Tumor
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Detection System
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Advanced artificial intelligence technology for analyzing MRI scans and detecting 
            potential brain tumors. Educational demonstration of medical imaging AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/brain-tumor-detection">
              <Button size="lg" className="min-w-[200px] text-lg h-14">
                <Upload className="w-5 h-5 mr-2" />
                Try Detection Tool
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="min-w-[200px] text-lg h-14">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            ⚠️ For educational purposes only - Not for medical diagnosis
          </p>
        </section>

        {/* Sample Results Preview */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">See It In Action</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            Example of AI-powered tumor detection and visualization
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&q=80"
                alt="Original MRI"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Original MRI Scan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Upload your brain MRI scan for analysis
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden border-2 border-blue-500">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&q=80"
                alt="Detected Regions"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  AI Detection
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Highlighted tumor regions with confidence scores
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&q=80"
                alt="Heatmap"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Probability Heatmap</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Visual representation of detection probabilities
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NeuroDetect AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Accurate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get results in seconds with advanced AI algorithms that simulate 
                professional-grade image analysis
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Demonstrates state-of-the-art machine learning techniques used 
                in medical imaging diagnostics
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All processing happens in your browser - your images never 
                leave your device
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload MRI Scan</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose an MRI image from your device or select from our sample images
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our system analyzes the image using simulated deep learning algorithms
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">View Results</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get detailed results with highlighted regions, confidence scores, and recommendations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience AI-Powered Detection?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Try our demonstration tool with sample MRI images or upload your own
            </p>
            <Link href="/brain-tumor-detection">
              <Button size="lg" variant="secondary" className="min-w-[250px] text-lg h-14">
                <Brain className="w-5 h-5 mr-2" />
                Start Detection Now
              </Button>
            </Link>
            <p className="text-blue-100 text-sm mt-6">
              Free to use • No registration required • Educational purposes only
            </p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            <strong>Medical Disclaimer:</strong> This tool is for educational demonstration only.
          </p>
          <p>
            Not intended for medical diagnosis. Always consult qualified healthcare professionals.
          </p>
        </div>
      </footer>
    </div>
  );
}