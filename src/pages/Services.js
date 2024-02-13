import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import MUYA from "../images/muya masitemariya.jpg"
import MUYA2 from "../images/day care service.jpg"
import MUYA3 from "../images/Daycare service.png"
import MUYA4 from "../images/VOT1.jpg"
import MUYA5 from "../images/women tech.webp"
import MUYA6 from "../images/Mindset Training.jpg"

import { useState } from "react";
import READMORE from "./READMORE";
import Modal from "../components/Modal";

export default function Service(){


    return(
        <div>
        <Navbar/>
        <div>
          <div className="mt-28 bg-indigo-600 h-28">
            <h1 className="text-6xl text-center font-bold text-white">OUR <span className="text-green-600">SERVICES</span> </h1>
            <p className="text-center text-2xl text-white">Here are the services that we provide for our customers!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 m-10 ">
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110">
                <div><img  className="w-full h-52 mb-5" src={MUYA}/></div>
                <div><p className="text-center lg:text-xl">የእናቶች ሙያ ማሰልጠኛ</p></div>
                <div><p className="text-center lg:text-xl">Providing vocational training to mothers!</p></div>
                <div className="text-center p-5"><button  className="text-sm rounded-lg p-2 cursor-pointer bg-indigo-500 text-white hover:scale-125 font-bold">READ MORE</button></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110"> 
             <div><img  className="w-full h-52 mb-5" src={MUYA2}/></div>
                <div><p className="text-center lg:text-xl">የልጆች ማቆያ እና መንከባከቢያ</p></div>
                <div><p className="text-center lg:text-xl">Childcare and daycare!</p></div>
                <div className="text-center p-5"><button  className=" text-sm rounded-lg p-2 cursor-pointer bg-indigo-500 text-white hover:scale-125 font-bold">READ MORE</button></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110">
             <div><img  className="w-full h-52 mb-5" src={MUYA3}/></div>
                <div><p className="text-center lg:text-xl">ህፃናትን በስነ-ምግባር የታነፁ እና ግብረ ገብ ትዉልዶች ማድረግ </p></div>
                <div><p className="text-center lg:text-xl">Providing vocational training to mothers!</p></div>
                <div className="text-center p-5"><button  className=" text-sm rounded-lg p-2 cursor-pointer bg-indigo-500 text-white hover:scale-125 font-bold">READ MORE</button></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110">
             <div><img  className="w-full h-52 mb-5" src={MUYA4}/></div>
                <div><p className="text-center lg:text-xl">የወጣቶች ዘመኑን የዋጀ ስልጠና</p></div>
                <div><p className="text-center lg:text-xl">The training that redeemed the youth</p></div>
                <div className="text-center p-5"><button  className=" text-sm rounded-lg p-2 cursor-pointer bg-indigo-500 text-white hover:scale-125 font-bold">READ MORE</button></div>
                 </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110">
             <div><img  className="w-full h-52 mb-5" src={MUYA6}/></div>
                <div><p className="text-center lg:text-xl">የህይወት ክህሎት ስልጠና ለሴቶች</p></div>
                <div><p className="text-center lg:text-xl">Mindset trainig for womens</p></div>
                <div className="text-center p-5"><button   className=" text-sm rounded-lg p-2 cursor-pointer  bg-indigo-500 text-white hover:scale-125 font-bold">READ MORE</button></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110">
             <div><img  className="w-full h-52 mb-5" src={MUYA5}/></div>
                <div><p className="text-center lg:text-xl">የሴት ወጣቶች ቴክኖሎጂ ማሰልጠኛ</p></div>
                <div><p className="text-center lg:text-xl">Providing vocational training to mothers!</p></div>
                <div className="text-center p-5"><button  className=" text-sm rounded-lg p-2 cursor-pointer bg-indigo-500 text-white hover:scale-125 font-bold">READ MORE</button></div>
             </div>
          </div>



        </div>
        <Footer />
        </div>
    )
}