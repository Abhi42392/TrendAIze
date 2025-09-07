"use client"
import React, { useState } from 'react'
import icons from '../const/icons'

const Hero = () => {
 // use state for selected image preview for person and outfit separately
 const [personImage, setPersonImage] = useState(null)
 const [outfitImage, setOutfitImage] = useState(null)
 const [outputImage, setOutputImage] = useState(null)

 const handlePersonImageSelect = (e) => {
   const file = e.target.files[0]
   if (file) {
     const reader = new FileReader()
     reader.onloadend = () => {
       setPersonImage(reader.result)
     }
     reader.readAsDataURL(file)
   }
 }

 const handleOutfitImageSelect = (e) => {
   const file = e.target.files[0]
   if (file) {
     const reader = new FileReader()
     reader.onloadend = () => {
       setOutfitImage(reader.result)
     }
     reader.readAsDataURL(file)
   }
 }

 return (
   <div className="lg:min-h-[90vh] pt-[10vh] w-full">
     <div className="grid grid-cols-2 max-sm:gap-x-2 max-lg:gap-6 max-sm:gap-y-6 lg:flex lg:justify-between lg:items-center w-full">
       {/* Person icon with add button */}
       {/* if no image is selected show icons.person else show the selected image it should occupy entire div use person props*/}
       <div className="relative w-full lg:w-[20vw] aspect-[3/4] max-sm:h-[270px] max-lg:h-[370px] border-2 border-dashed border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer overflow-hidden">
         <input
           type="file"
           accept="image/*"
           onChange={handlePersonImageSelect}
           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
         />
         {personImage ? (
           <img src={personImage} alt="Selected person" className="w-full h-full object-contain object-center" />
         ) : (
           <>
             <div className="relative">
               {icons.person}
               <div className="absolute bottom-2 right-0 bg-white rounded-full p-1">
                 {icons.bottom_add}
               </div>
             </div>
             <p className="text-gray-600 font-sans">Add your image here</p>
           </>
         )}
       </div>
     
       <div className='max-lg:hidden'>{icons.add}</div>
       
       {/* if no image is selected show icons.person else show the selected image it should occupy entire div use outfit props*/}
       {/* Outfit icon with add button */}
       <div className="relative w-full lg:w-[20vw] aspect-[3/4] max-sm:h-[270px] max-lg:h-[370px] border-2 border-dashed border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-all cursor-pointer overflow-hidden">
         <input
           type="file"
           accept="image/*"
           onChange={handleOutfitImageSelect}
           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
         />
         {outfitImage ? (
           <img src={outfitImage} alt="Selected outfit" className="w-full h-full object-contain object-center" />
         ) : (
           <>
             <div className="relative">
               {icons.outfit}
               <div className="absolute bottom-2 right-0 bg-white rounded-full p-1">
                 {icons.bottom_add}
               </div>
             </div>
             <p className="text-gray-600 font-sans">Add your outfit here</p>
           </>
         )}
       </div>
       
       {/* create equals svg icon */}
       <div className='max-lg:hidden'>
         {icons.equals}
       </div>
       
       {/*just include image tag to display the output if output exists */}
       {/* Output div */}
       <div className="relative w-full col-span-2 lg:w-[20vw] max-sm:h-[350px] max-lg:h-[450px] aspect-square lg:aspect-[3/4] border-2 border-solid border-black rounded-2xl flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
         {outputImage ? (
           <img src={outputImage} alt="Output" className="w-full h-full object-cover" />
         ) : (
           <p className="text-gray-700 font-sans text-center px-4">Your styled output will appear here</p>
         )}
       </div>
     </div>
     
     <div className='w-full flex justify-center my-6 lg:my-12'>
       <button className='bg-black text-white active:scale-95 flex items-center gap-3 py-3.5 px-8 text-base font-semibold uppercase tracking-wider rounded-md cursor-pointer transition-all hover:shadow-xl'>
         <span>Try outfit now</span>
         {icons.right_arrow}
       </button>
     </div>
   </div>
 )
}

export default Hero