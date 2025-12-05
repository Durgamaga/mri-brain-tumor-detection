"use client";

import { useState, useRef } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  onImageSelect: (imageUrl: string) => void;
}

export default function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onImageSelect(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSampleImage = (sampleUrl: string) => {
    onImageSelect(sampleUrl);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card
        className={`p-12 border-2 border-dashed transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
            : "border-gray-300 dark:border-gray-700"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
            <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload MRI Scan</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Drag and drop your MRI image here, or click to browse
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            size="lg"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Select Image
          </Button>
        </div>
      </Card>

      {/* Sample Images */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Or try with sample MRI scans
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <Card
              key={num}
              className="p-2 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() =>
                handleSampleImage(
                  `https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&q=80`
                )
              }
            >
              <img
                src={`https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&q=80`}
                alt={`Sample MRI ${num}`}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Sample MRI {num}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
