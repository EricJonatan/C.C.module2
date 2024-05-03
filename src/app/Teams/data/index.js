"use client"

import { useEffect, useState } from "react";
import TeamPeople from "@/app/_components/teamPeople";

export default function User(){
    const [data,setData] = useState([])

    async function pullJson(){
        const response = await fetch('http://localhost:2000/someone')
        const responseData = await response.json()
        setData(responseData)

    }

    



    // const data = pullJson()

    useEffect(() => {
        pullJson()
    }, [])

    return(
        <div className="flex flex-col justify-between m-10 md:flex-row">
        {data.map((params) => 
                <TeamPeople 
                name={params.name} 
                position={params.position} 
                description={params.description} 
                address={params.address.city}
                img={params.img} 
                phoneNum={params.phone}/> 

            
        )}
        </div>
    )

}