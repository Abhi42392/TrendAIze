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
        <svg className="w-32 h-32 mb-4" fill="#000000" viewBox="0 0 24 24">
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
      <svg className="w-32 h-32" fill="none" stroke="black" strokeWidth={2} viewBox="0 0 32 32">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V9c0-1.8 1.6-3.3 3.5-3 1.2.2 2.2 1.2 2.4 2.4.2 1.4-.4 2.6-1.5 3.2-.9.5-1.4 1.6-1.4 2.6v0c0 1.1.6 2.1 1.5 2.7l10.6 5.2c1 .5.6 1.9-.4 1.9H4.2c-1.1 0-1.4-1.4-.4-1.9L16 16" />
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
    ),
    menu:(
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}
export default icons
