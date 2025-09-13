import React from 'react'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
});
const Logo = () => {
    return (
        <h1 className={`${montserrat.className} max-sm:text-xl text-3xl  tracking-widest`}>
            TR<span className="max-sm:text-2xl text-4xl font-black">AI</span>L ROOM
        </h1>
    )
}
        
export default Logo