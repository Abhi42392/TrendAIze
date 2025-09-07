import React from 'react'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
});
const Logo = () => {
    return (
        <h1 className={`${montserrat.className} text-3xl  tracking-widest`}>
        Trend<span className="text-4xl font-bold">AI</span>z
        </h1>
    )
}
        
export default Logo