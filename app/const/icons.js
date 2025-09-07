const icons={
    add:(
        <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="black" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
    ),
    equals:(
        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 9h12v2H6V9zm0 4h12v2H6v-2z"/>
        </svg>
    ),
    person:(
        <svg className="w-32 h-32 text-gray-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
    ),
    bottom_add:(
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={2}/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
        </svg>
    ),
    outfit:(
        <svg className="w-32 h-32 text-gray-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 2l6 4.5L18 2v7l-6 4.5L6 9V2zm6 6.5L16.5 6 12 3.5 7.5 6l4.5 2.5zM2.5 13.5c.28 0 .5.22.5.5v8c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-8c0-.28.22-.5.5-.5zm19 0c.28 0 .5.22.5.5v8c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-8c0-.28.22-.5.5-.5zM6 14v8h12v-8l-6 3-6-3z"/>
        </svg>
    ),
    right_arrow:(
        <svg 
        className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    )
}
export default icons
