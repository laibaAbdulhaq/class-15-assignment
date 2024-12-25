import React from "react";
import Link from "next/link";
const Header = ()=>{
    return(
        
            <header className=" text-center font-bold bg-black text-white text-4xl lg-9xl py-4">
                <Link href="/"><h1> Todo Items</h1></Link>
            </header>
        
    )
}
export default Header;