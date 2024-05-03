"use client"

import RatingTemplate from "./Ratingtemplate";
import { useEffect, useState } from "react"

export default function AddRating() {
    const [ allRating, setAllRating ] = useState([]);
    const [ newRating, setNewRating ] = useState("");
    const [ newName, setNewName ] = useState("")
    const [ ratingDesc, setRatingDesc ] = useState("")
    const [ count, setCount ] = useState(0)

    useEffect(() => {
                let savedRating = JSON.parse(localStorage.getItem('rating'))
                if(savedRating){
                    setAllRating(savedRating);
                }}, [])

    useEffect(() => {
                let savedCount = (localStorage.getItem('counter'))
                if(savedCount){
                    setCount(savedCount);
                }}, [])


    function handleRate() {
        let ratingArr = {
            name: newName,
            rating: newRating,
            description: ratingDesc
        }   

        let updatedArr =  [...allRating];
        updatedArr.push(ratingArr)
        setAllRating(updatedArr)
        localStorage.setItem('rating', JSON.stringify(updatedArr)) 


        let number = count + 1
        setCount(count + 1)
        localStorage.setItem('counter', number)
        number++

        
        
        
    }


    return(
        <>
        <div className="md:mx-40 mx-6 bg-white" id="rating-bar">
            <h1 className=" text-2xl font-bold my-2">Reviews ({count})</h1>
            <h1 className=" text-2xl my-2">We'd be happy if you give us a feedback!</h1>
            <div className=" flex flex-col text-center items-center ">
                <input type="text" value={newName} placeholder="Write your username" onChange={(e) => {
                    setNewName(e.target.value)
                }} class="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2 w-80 my-1"></input>
                <input type="text" value={newRating} placeholder="Write your rating (1 to 5)" onChange={(e) => {
                    setNewRating(e.target.value)
                }} class="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2 w-80 my-1"></input>
                <input type="text" value={ratingDesc} placeholder="tell us your experience about our services" onChange={(e) => {
                    setRatingDesc(e.target.value)
                }} class="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2 w-80 my-1"></input>

                <button type="button" onClick={handleRate} className="btn btn-outline btn-success">Post</button>
            </div>

            <div className=" m-10">

                {allRating.map((item, index) => {
                    return(
                        <RatingTemplate value={item.rating} user={item.name} comment={item.description} date={"weeks ago"} key={index}/>
                    )
                })}
            </div>
        </div>

        
        </>
        
    )
}