import { IoLocationOutline } from "react-icons/io5";
import { FaDog, FaInstagram, FaTwitter, FaLinkedin , FaWhatsapp } from "react-icons/fa";



export default function FooterWeb() {


    return (
        <footer className= " bg-black py-16 md:px-32 px-4">
            
            <div className=" flex flex-row">
               <div id="logo" className=" border-4 border-white rounded-full ">
                 < FaDog  size={50} color="white"/>
                </div>
                <div className=" ml-auto">
                    <button className="btn rounded-full"> <IoLocationOutline size={24} /> United States / English</button>
                </div>
            </div>
            <hr className=" bg-white my-5"></hr>

            <div className=" flex flex-col md:flex-row">

                <div className=" flex flex-col py-3 mr-10">
                    <p className=" text-gray-400 text-xs mb-3">ABOUT US</p>
                    <a href="" className=" text-white text-l my-1 hover:underline">Media Center</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Investors</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Policies</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Career</a>
                </div>

                <div className=" flex flex-col py-3 md:mx-10">
                    <p className=" text-gray-400 text-xs mb-3">NEED HELP?</p>
                    <a href="" className=" text-white text-l my-1 hover:underline">FAQ</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Contact Us</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">International</a>
                </div>

                <div className=" flex flex-col py-3 md:mx-10">
                    <a href="" className=" text-white text-l my-1 w-52 hover:underline">Do Not Sell My Personal Information</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Terms of Use</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Privacy Policy</a>
                    <a href="" className=" text-white text-l my-1 hover:underline">Cookies Settings</a>
                </div>

                <div className=" ml-auto">
                    <div className=" group-[ text-white ]: hidden flex-row p-3 md:flex "  id="icons">
                        <a className="" target="_blank" href="https://www.instagram.com/"><FaInstagram size={35}/></a>
                        <a className="" target="_blank" href="https://twitter.com/?lang=id"><FaTwitter size={35} /></a>
                        <a className="" target="_blank" href="https://id.linkedin.com/"><FaLinkedin size={35} /></a>
                        <a className="" target="_blank" href="https://www.whatsapp.com/?lang=id_ID"><FaWhatsapp size={35} /></a>
                    </div>
                </div>
                

            </div>

            <div className=" group-[ text-white ]: flex flex-row ml-auto mt-5 md:hidden" id="icons">
                    <a className="" target="_blank" href="https://www.instagram.com/"><FaInstagram size={35}/></a>
                    <a className="" target="_blank" href="https://twitter.com/?lang=id"><FaTwitter size={35}/></a>
                    <a className="" target="_blank" href="https://id.linkedin.com/"><FaLinkedin size={35}/></a>
                    <a className="" target="_blank" href="https://www.whatsapp.com/?lang=id_ID"><FaWhatsapp size={35}/></a>
                </div>

            <hr className=" bg-white my-5"></hr>

            <div>
                <p className=" float-right text-white text-sm">© 2024 The woof Company. All rights reserved.</p>
            </div>

        </footer>
    )
}