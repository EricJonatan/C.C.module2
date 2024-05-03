"use client"

import Link from "next/link"
import { useState } from "react";
import { FaLocationArrow, FaDog } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


export default function NewNavbar() {
    const [ count, setCount ] = useState(false)

    function dropdown(){
        let style = []

        if(count) {
            style = ["flex-col", "text-white", "bg-gray-800", "text-center", "text-xl", "md:hidden"]
            style.push("flex")

        } else{
            style.push("hidden")
        }
        
        return style.join(" ");
    }
    
    return(
        <>
        <nav className=" bg-gradient-to-r from-green-300 to-green-700 ... sticky top-0 z-10 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center border-b-4 border-green-700">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className=" ml-5 border-4 rounded-full border-black ">
                    <FaDog size={40} color="black"/>
                </a>
                <div className=" hidden md:block text-xl">
                    <Link href="/" className="mx-2 hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="/AboutUs" className="mx-2 hover:text-gray-400">
                        About Us
                    </Link>
                    <Link href="/Services" className="mx-2 hover:text-gray-400">
                        Services
                    </Link>
                    <Link href="/Teams" className="mx-2 hover:text-gray-400">
                        Teams
                    </Link>
                </div>

                <div className=" md:hidden flex items-center">
                    <button className="" onClick={() => {
                        setCount(!count)
                    }}>
                        <GiHamburgerMenu size={40} />
                    </button>

                </div>

            </div>
        </nav>
        <div className={dropdown()}>

            <Link href="/AboutUs" className=" hover:text-gray-400 hover:bg-gray-200 w-full py-2">
                About Us
            </Link>
            <Link href="/Services" className=" hover:text-gray-400 hover:bg-gray-200 w-full py-2">
                Services
            </Link>
            <Link href="/Teams" className=" hover:text-gray-400 hover:bg-gray-200 w-full py-2">
                Teams
            </Link>

        </div>
        </>

    )
}