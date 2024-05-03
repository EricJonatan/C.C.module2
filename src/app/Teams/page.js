import TeamPeople from "../_components/teamPeople"
import User from "./data";
import { FaPeopleGroup } from "react-icons/fa6";


export default function page(){
    

    return(
        <div className=" ">
            <div className=" flex justify-center mt-10">
                <FaPeopleGroup size={50} color="green"/>
            </div>
            
            <h1 className=" font-bold text-5xl text-green-600 text-center pb-5">Meet Our Team</h1>
            <div className=" w-3/4 text-center mx-auto mb-10 bg-yellow-50 p-5 ">
                <p className=" text-xl text-green-800">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <User/>


            

        </div>
        
    )
}