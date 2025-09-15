import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import "dotenv/config";

// Initialize client with API key from .env
const genAI = new GoogleGenAI({});

async function main() {
  // Load your base images
  const dressImage = fs.readFileSync("./dress.png");
  const modelImage = fs.readFileSync("./model.png");

  // Convert images into inlineData for the API
  const dressPart = {
    inlineData: {
      data: dressImage.toString("base64"),
      mimeType: "image/png",
    },
  };

  const modelPart = {
    inlineData: {
      data: modelImage.toString("base64"),
      mimeType: "image/png",
    },
  };

  /*
  Prompt 1
    Create a professional e-commerce fashion photo. 
  Take the dress from the first image and let the model from the second image wear it. 
  Keep the model’s face, body shape, and pose unchanged. 
  Generate a realistic, image of model wearing the outfit, 
  with the lighting and shadows adjusted to match the environment
   */
  const textPrompt = `
  Take the person from the second image and realistically dress them in the outfit from the first image. 

Keep the person’s face, body shape, and pose unchanged. 

Ensure the outfit from the first image is naturally fitted to the person, with correct proportions, textures, and lighting. 

Preserve background from the second image without distortion.
.
  `;

  // Call Gemini model
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: [dressPart, modelPart, { text: textPrompt }],
  });

  // Extract image output
  const parts = response.candidates[0].content.parts;
  for (const part of parts) {
    if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, "base64");
      fs.writeFileSync("fashion_ecommerce_shot.png", buffer);
      console.log("✅ Image saved as fashion_ecommerce_shot.png");
    } else if (part.text) {
      console.log("Text output:", part.text);
    }
  }
}

main().catch(console.error);
