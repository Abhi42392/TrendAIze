import { GenerateImage } from "@/app/lib/GenerateImage";
import { NextResponse } from "next/server"

export async function POST(req,res){
    try{
        const formData=await req.formData();
        const dress=formData.get("dress")
        const model=formData.get("modal")

        if(!dress || !model){
            return NextResponse.json({
                success:false,
                error:"Missing dress or modal image"},
                {status:400}
            )
        }

        //converting blob file of image to base64 url
        const dressBytes = await dress.arrayBuffer();
        const modelBytes = await model.arrayBuffer();
    
        const dressBase64 = Buffer.from(dressBytes).toString('base64');
        const modelBase64 = Buffer.from(modelBytes).toString('base64');
    
        const response=await GenerateImage(dressBase64,modelBase64);
        if(response.error){
            return NextResponse.json({
                success:false,
                error:response.error},
                {status:500}
            )
        }
        return NextResponse.json({
            success:true,
            image:response}
        )
    }catch(err){
        console.error("API error",err);
        return NextResponse.json({
            success:false,
            error:err.message
        },{status:500})
    }
}