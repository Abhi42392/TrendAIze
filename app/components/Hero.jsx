import React from 'react'
import icons from '../const/icons'
const Hero = () => {
 return (
   <div className="lg:min-h-[90vh] pt-[10vh] w-full">
    
     <div className="grid grid-cols-2 max-sm:gap-x-2 max-lg:gap-6 max-sm:gap-y-6 lg:flex lg:justify-between lg:items-center w-full">
       {/* Person icon with add button */}
  
       <div className="relative w-full lg:w-[20vw] aspect-[3/4] max-sm:h-[270px] max-lg:h-[370px] border-2 border-dashed border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer">
         <div className="relative ">
           {icons.person}
           <div className="absolute bottom-2 right-0 bg-white rounded-full p-1">
             {icons.bottom_add}
           </div>
         </div>
         {/*include image tag to display selected image*/}
         <p className="text-gray-600 font-sans">Add your image here</p>
       </div>
     
        <div className='max-lg:hidden'>{icons.add}</div>

       {/* Outfit icon with add button */}
       <div className="relative w-full lg:w-[20vw] aspect-[3/4] max-sm:h-[270px] max-lg:h-[370px] border-2 border-dashed border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-all cursor-pointer">
         <div className="relative">
          {icons.outfit}
           <div className="absolute bottom-2 right-0 bg-white rounded-full p-1">
             {icons.bottom_add}
           </div>
         </div>
         {/*include image tag to display selected image*/}
         <p className="text-gray-600 font-sans">Add your outfit here</p>
       </div>
        {/* create equals svg icon */}
       <div className='max-lg:hidden'>
          {icons.equals}
       </div>
       {/* Output div */}
       <div className="relative w-full col-span-2  lg:w-[20vw] max-sm:h-[350px] max-lg:h-[450px] aspect-square  lg:aspect-[3/4] border-2 border-solid border-black rounded-2xl flex flex-col items-center justify-center bg-gray-100">
         <p className="text-gray-700 font-sans text-center px-4">Your styled output will appear here</p>
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