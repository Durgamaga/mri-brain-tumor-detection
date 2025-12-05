import { DetectionResult } from "@/app/brain-tumor-detection/page";

/**
 * Simulated AI-powered brain tumor detection
 * In a real application, this would call a backend API with a trained ML model
 */
export async function analyzeMRI(imageUrl: string): Promise<DetectionResult> {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Generate random but realistic detection results
  const hasTumor = Math.random() > 0.4; // 60% chance of detecting tumor for demo
  const confidence = hasTumor
    ? Math.floor(Math.random() * 30) + 70 // 70-100% if tumor detected
    : Math.floor(Math.random() * 40) + 10; // 10-50% if no tumor

  const tumorTypes = [
    "Glioblastoma",
    "Meningioma",
    "Pituitary Adenoma",
    "Acoustic Neuroma",
    "Metastatic Tumor",
  ];

  const regions = [
    "Frontal Lobe",
    "Temporal Lobe",
    "Parietal Lobe",
    "Occipital Lobe",
    "Cerebellum",
    "Brain Stem",
  ];

  const processedImages = await generateProcessedImages(imageUrl, hasTumor);

  const recommendations = hasTumor
    ? [
        "Consult with a neurosurgeon immediately",
        "Schedule a follow-up MRI with contrast",
        "Consider getting a second opinion",
        "Discuss treatment options with your oncologist",
        "Request a biopsy if recommended",
      ]
    : [
        "Continue regular check-ups as recommended",
        "Maintain a healthy lifestyle",
        "Report any new symptoms to your doctor",
        "Schedule routine follow-up scans",
      ];

  return {
    confidence,
    tumorDetected: hasTumor,
    tumorType: hasTumor
      ? tumorTypes[Math.floor(Math.random() * tumorTypes.length)]
      : "None",
    region: hasTumor
      ? regions[Math.floor(Math.random() * regions.length)]
      : "N/A",
    recommendations: recommendations.slice(0, hasTumor ? 5 : 4),
    processedImage: processedImages.processed,
    heatmapImage: processedImages.heatmap,
  };
}

/**
 * Generate processed images with tumor detection overlays
 */
async function generateProcessedImages(
  imageUrl: string,
  hasTumor: boolean
): Promise<{ processed: string; heatmap: string }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Create processed image with detection overlay
      const processedCanvas = document.createElement("canvas");
      processedCanvas.width = img.width;
      processedCanvas.height = img.height;
      const processedCtx = processedCanvas.getContext("2d");

      if (processedCtx) {
        processedCtx.drawImage(img, 0, 0);

        if (hasTumor) {
          // Draw detection regions (red circles/ellipses)
          const numRegions = Math.floor(Math.random() * 2) + 1; // 1-2 regions
          for (let i = 0; i < numRegions; i++) {
            const x = Math.random() * img.width * 0.6 + img.width * 0.2;
            const y = Math.random() * img.height * 0.6 + img.height * 0.2;
            const radiusX = Math.random() * 40 + 30;
            const radiusY = Math.random() * 40 + 30;

            // Red outline
            processedCtx.strokeStyle = "rgba(255, 0, 0, 0.8)";
            processedCtx.lineWidth = 3;
            processedCtx.beginPath();
            processedCtx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
            processedCtx.stroke();

            // Semi-transparent red fill
            processedCtx.fillStyle = "rgba(255, 0, 0, 0.2)";
            processedCtx.fill();
          }
        }
      }

      // Create heatmap image
      const heatmapCanvas = document.createElement("canvas");
      heatmapCanvas.width = img.width;
      heatmapCanvas.height = img.height;
      const heatmapCtx = heatmapCanvas.getContext("2d");

      if (heatmapCtx) {
        heatmapCtx.drawImage(img, 0, 0);

        if (hasTumor) {
          // Create heatmap overlay
          const gradient = heatmapCtx.createRadialGradient(
            img.width / 2,
            img.height / 2,
            0,
            img.width / 2,
            img.height / 2,
            Math.min(img.width, img.height) / 2
          );

          gradient.addColorStop(0, "rgba(255, 0, 0, 0.6)");
          gradient.addColorStop(0.5, "rgba(255, 165, 0, 0.4)");
          gradient.addColorStop(1, "rgba(255, 255, 0, 0.1)");

          heatmapCtx.fillStyle = gradient;
          heatmapCtx.fillRect(0, 0, img.width, img.height);
        } else {
          // Add slight green tint for no detection
          heatmapCtx.fillStyle = "rgba(0, 255, 0, 0.1)";
          heatmapCtx.fillRect(0, 0, img.width, img.height);
        }
      }

      resolve({
        processed: processedCanvas.toDataURL(),
        heatmap: heatmapCanvas.toDataURL(),
      });
    };

    img.onerror = () => {
      // Fallback: return original image
      resolve({
        processed: imageUrl,
        heatmap: imageUrl,
      });
    };

    img.src = imageUrl;
  });
}
