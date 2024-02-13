// import React from "react";
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer";

// export default function Contact(){
//     return(
//         <div>
//                     <div>
//         <Navbar/>
//         <div>
//           <div className="mt-28 bg-indigo-600 h-28">
//             <h1 className="text-6xl text-center font-bold text-white">CONTACT <span className="text-green-600"> US</span> </h1>
//           </div>
//         <div className="grid grid-cols-2">
//           <div className="bg-red-600">
//              <form 
//              className="flex flex-col  items-center border bg-indigo-500 space-y-0 "
//              >
//               <input 
//               className="p-6 border w-50 sm:w-80 md:w-96 mt-5 rounded-xl"
//               type="text"
//               placeholder="Your Name"
//               />
//              <br></br><br></br><br></br>
//               <input 
//               className="p-6 border w-50 sm:w-80 md:w-96 mt-5 rounded-xl"
//               type="email"
//               placeholder="Your Email"
//               />
//              <br></br><br></br><br></br>
//              <textarea 
//              className="p-6 border w-50 sm:w-80 md:w-96 mt-5 rounded-xl"
//              value="please insert your message here."
//              >
                             
//              </textarea>
//              <br></br>
//              <br></br>
//              <br></br> 
//              <button
//              className="border bg-blue-600 rounded-lg w-52 text-white font-bold text-xl"
//              >
//                 SEND MESSAGE
//              </button>
//              <br></br><br></br>
//              </form>
//              </div>
//              <div className="h-24">
//           <div className="pl-40 flex flex-col gap-12">
//             <div className="flex  flex-col justify-start ">
//               <div className="flex ">
//             <svg className="w-10 h-14 lg:mr-6  sm: mt-10" data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
//          </svg>
//          <div className="mt-12 text-xl md:text-2xl lg:text-2xl text-blue-500 font-bold  ">
//         <span>Location</span>
//         </div>
//              </div>
             
//         <div className="text-bold  text-xl text-blue-600 ">
//             <h1>6 kilo,Gullie, Addis Ababa</h1>
//             </div>
//         </div>
            

//        {/* //here is for email */}
//        <div className="flex  flex-col justify-start ">
//               <div className="flex ">
//               <svg className="w-10 h-14 lg:mr-6  sm: mt-10" data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
// </svg>
//          <div className="mt-12 text-xl md:text-2xl lg:text-2xl text-blue-500 font-bold  ">
//         <span>Email</span>
//         </div>
//              </div>
             
//         <div className="text-bold  text-xl text-blue-600 ">
//             <h1>brightthoughtngo@gmail.com</h1>
//             </div>
//         </div>


//             {/* Call ICON */}
            
//             <div className="flex  flex-col justify-start ">
//               <div className="flex ">
//          <svg className="w-10 h-14 lg:mr-6  sm: mt-10" data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"></path>
// </svg>

//          <div className="mt-12 text-xl md:text-2xl lg:text-2xl text-blue-500 font-bold  ">
//         <span>Phone Number</span>
//         </div>
//              </div>
             
//         <div className="text-bold  text-xl text-blue-600 ">
//             <h1>+251908259010</h1>
//             <h1>+251995579644</h1>
//             </div>
//         </div>
//             {/* <div className="lg:mt-0  text-bold text-2xl text-blue-600 text-center">
//             <h1>+251908259010</h1>
//             </div>
//             <div className="lg:mt-0  text-bold text-2xl  text-blue-600 text-center">
//             <h1>+251995579644</h1>
//             </div> */}
//             </div>
//           </div>   
//           </div>
//         </div>
//   {/* //Google Map */}
//   <div className=" flex justify-center items-center">
//   <svg className="w-10 h-20 mr-5 " data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
// </svg>
// <span className="text-4xl text-center font-bold  text-indigo-700">Our Address</span>
//   </div>
     
//       <div className="flex justify-center my-10">
//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3313652938864!2d38.761112139770894!3d9.033506291065345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8589e4c4a803%3A0xbae724e3b927f424!2sAddis%20Ababa%20University%20%7C%20Natural%20Sciences%20Campus!5e0!3m2!1sen!2sus!4v1707257639839!5m2!1sen!2sus"
//          className="w-full mx-5"
//          height="500"
//          style={{border:"0"} }
//          allowfullscreen="" 
//          loading="lazy" 
//          referrerpolicy="no-referrer-when-downgrade">
//          </iframe>
//       </div>
//         <Footer />
//         </div>
//         </div>
//     )
// }

// ContactUs.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <div className='grid grid-cols-2 '>
 <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {/* <h2 className="text-2xl font-bold mb-4">Contact Us</h2> */}
        <form>
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
</div>
   <div className='text-center text-red-600 mt-28'>
   <div className="h-24">
           <div className="pl-40 flex flex-col gap-2 text-left mt-22 pt-14">
             <div className="flex  flex-col  items-start ">
               <div className="flex ">
             <svg className="w-10 h-14 lg:mr-6  sm: mt-10" data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
   <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
   <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
          </svg>
          <div className="mt-12 text-xl md:text-2xl lg:text-2xl text-blue-600 font-bold text-left ">
         <span>Location</span>
         </div>
              </div>
             
         <div className="text-bold  text-xl text-blue-600 ">
             <h1>6 kilo,Gullie, Addis Ababa</h1>
             </div>
         </div>
            
        {/* //here is for email */}
        <div className="flex  flex-col items-start ">
               <div className="flex ">
               <svg className="w-10 h-14 lg:mr-6  sm: mt-10" data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
 </svg>
          <div className="mt-12 text-xl md:text-2xl lg:text-2xl text-blue-500 font-bold  ">
         <span>Email</span>
         </div>              </div>
             
         <div className="text-bold  text-xl text-blue-600 ">
             <h1>brightthoughtngo@gmail.com</h1>
             </div>
         </div>


             {/* Call ICON */}
            
             <div className="flex  flex-col items-start ">
               <div className="flex ">
          <svg className="w-10 h-14 lg:mr-6  sm: mt-10" data-slot="icon" fill="none" stroke-width="2" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
   <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"></path>
 </svg>
          <div className="mt-12 text-xl md:text-2xl lg:text-2xl text-blue-500 font-bold  ">
         <span>Phone Number</span>
         </div>
              </div>
             
         <div className="text-bold  text-xl text-blue-600 ">
             <h1>+251908259010</h1>
             <h1>+251995579644</h1>
             </div>
         </div>
             {/* <div className="lg:mt-0  text-bold text-2xl text-blue-600 text-center">
             <h1>+251908259010</h1>
             </div>
             <div className="lg:mt-0  text-bold text-2xl  text-blue-600 text-center">
             <h1>+251995579644</h1>
             </div> */}
             </div>
           </div>   
           </div>
        </div>
   
    <div className="flex justify-center my-10">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3313652938864!2d38.761112139770894!3d9.033506291065345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8589e4c4a803%3A0xbae724e3b927f424!2sAddis%20Ababa%20University%20%7C%20Natural%20Sciences%20Campus!5e0!3m2!1sen!2sus!4v1707257639839!5m2!1sen!2sus"
          className="w-full mx-5"
          height="500"
         style={{border:"0"} }
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    <Footer/>
  </div>
  );
};

export default Contact;
