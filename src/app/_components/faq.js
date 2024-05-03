"use client"

import { useState } from "react"

export default function Faq({title, content}) {
    const [ state, setState ] = useState(true)

    function changing() {
        let sign = ""
        if(state) sign = "+"
        else sign = "-"
        return sign
    }

    return(
        <div className="">
            <details className="collapse border-y-white border-y-2 m-2 ">
                <summary className="collapse-title text-xl font-medium select-none" onClick={() => {
                    setState(!state)
                }}>
                    {title} {changing()}
                </summary>

            <div className="collapse-content"> 
                <p>{content}</p>
            </div>
            </details>
        </div>
        
    )
}