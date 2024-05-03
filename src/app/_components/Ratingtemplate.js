"use client"
import React from 'react';
import { MdOutlineStarBorder, MdOutlineStar  } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function Star({ filled }) {
  return filled ? <MdOutlineStar size={30}/> : <MdOutlineStarBorder size={30}/>;
}

function Rating({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= value} />);
  }
  return <div className=' flex flex-row'>{stars}</div>;
}

function RatingTemplate({value, user, comment, date, key}) {


  return (
    <div className=' border-t-2 p-2 border-black my-2 ' key={key}>
      <div className=' flex md:flex-row flex-col'>
        <Rating value={value} />
        <h1 className=' text-xl md:ml-auto md:my-0 my-10'> {date}</h1>
      </div>
      <div className='md:p-5 '>
        <h1 className=' text-2xl my-2 md:my-5 mt-0 bg-green-400 p-2 flex flex-row'><FaRegUserCircle size={30}/> {user}</h1>
        <p className=' text-sm bg-green-100 p-2'>{comment}</p>
      </div>
      
    </div>
  );
}

export default RatingTemplate;