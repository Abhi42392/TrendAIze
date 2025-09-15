import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const genAI = new GoogleGenAI({});

export async function GenerateImage(dress,model) {
  try{
      const dressImage = dress;
    const modelImage = model;

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
    if(response.candidates && response.candidates[0]){
      const parts=response.candidates[0].content.parts;
      for(const part of parts){
        if(part.inlineData){
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    const text=response.text();
    return {error:"No image generated",message:text};
  }catch(err){
    console.error("Error generating image",err);
    throw err;
  }
  // Load your base images
}
