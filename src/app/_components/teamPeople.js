"use client"

import React from "react"

export default function TeamPeople({name, position, description, address, img, phoneNum}) {
    
    return(
            <div className="card card-compact w-full md:w-80 bg-black bg-opacity-50 text-white shadow-xl mb-10 p-4">
                    <div className="avatar place-self-center">
                        <div className="w-36 rounded-full ringring-offset-base-100 ring-offset-2">
                            <img src={img}/>
                        </div>
                    </div>
            
                <div className="card-body text-center">
                    <h2 className=" text-2xl font-semibold text-green-600">{name}</h2>
                    <h2 className=" text-xl font-semibold text-gray-200">Position: {position}</h2>
                    <p className=" text-sm text-gray-300">{description}</p>
                    <p className=" text-green-500 text-2xl">City: {address} </p>
                    <p className="text-xl font-semibold text-red-300">Phone Number: {phoneNum} </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        
    )
}