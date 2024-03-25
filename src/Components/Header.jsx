import { useState } from "react";
import Button from './Button';
import { FaTimes } from "react-icons/fa";
import {CiMenuFries} from 'react-icons/ci';
import car from '../assets/car.png';
import devolution from '../assets/devolution.png';
import message from '../assets/message.png';



export default function Header() {

  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#7ad063] transition">
      <ul className="text-center text-xl p-20">

        <a spy={true} smooth={true} href="#"><li className="my-2 py-2 hover:bg-[#5B994A] hover:rounded">Home</li></a>
        <a spy={true} smooth={true} href="#"><li className="my-2 py-2  hover:bg-[#5B994A] hover:rounded">Options</li></a>
        <a spy={true} smooth={true} href="#"><li className="my-2 py-2 hover:bg-[#5B994A] hover:rounded">Show All</li></a>
        <a spy={true} smooth={true} href="#"><li className="my-2 py-2 hover:bg-[#5B994A] hover:rounded">Weeks Off</li></a>
        <div className="flex justify-evenly pt-10">
          <a className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center" href="#"><img className="h-[40px]" src={car} alt="car" /></a>
          <a href="#" className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center"><img className="h-[40px]" src={devolution} alt="devolution" /></a>
          <a href="#" className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center"><img className="h-[40px]" src={message} alt="message" /></a>
        </div>
      </ul>
    </div>
  </>
  
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  

  return (
    <>
       {/* <div className="bg-[#176027] flex p-3">
        <div className="flex items-center mx-auto">
          <p className="text-white mr-8 font-semibold">Weeks Off</p>
          <p className="text-white bg-[#7AD063D6] px-2 font-semibold">
            15% off
          </p>
        </div>
      </div>   */}

    
      <nav className="bg-[#7ad063] pt-3">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 items-center">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">XpressMarket</span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex items-center flex-10">


              <ul className="flex gap-8 mr-16 text-[18px]">
                <a spy={true} smooth={true} href="#"><li className="hover:text-[#176027] cursor-pointer text-xl">Home</li></a>
                <a spy={true} smooth={true} href="#"><li className="hover:text-[#176027] cursor-pointer text-xl">Options</li></a>
                <a spy={true} smooth={true} href="#"><li className="hover:text-[#176027] cursor-pointer text-xl">Show All</li></a>
              </ul>


              <ul className="flex gap-5 px-10">
               {/* <a className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center" href="#"><img className="h-   [20px]" src={car} alt="car" /></a> */}

               <a href="#" className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"><img className="h-[20px]" src={devolution} alt="devolution" /></a> 
              <a href="#" className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"><img className="h-[20px]" src={devolution} alt="devolution" /></a> 
               <a href="#" className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"><img className="h-[20px]" src={message} alt="message" /></a>
              </ul> 


              <ul>
              <a spy={true} smooth={true} href="#"><li className="hover:text-[#176027] cursor-pointer text-xl">Login</li></a>
              </ul>
            </div>
          </div>
          <div>
            {toggle && content}
          </div>
            <button className="block sm:hidden transition" onClick={handleClick}>
              {toggle ? <FaTimes /> : <CiMenuFries/>}
            </button> 

        </div>
      </nav>
    
       <div className="h-auto p-5" style={{ backgroundColor: "#7AD063" }}>
        <div className="place-items-center sm:grid grid-cols-2">
          <div>
            <p className="text-white text-1xl leading-4 font-bold mb-5">
              Title heading of mall online
            </p>

            <h1 className="text-white text-5xl font-bold">
              Eat clean & green, <br /> Eat organic
            </h1>
            <p className="text-white text-1xl mt-5 leading-normal">
              Lorem ips quas velit atque cumque <br /> asperiores neque porro
              sint, possimus ips quas velit .
            </p>

            <Button />
          </div>

          <div className="relative inset-0 flex">
            <img
              className="hidden sm:flex items-center animate-slideInRight"
              srcSet="./public/images/saladMain-removebg-preview.png"
              alt="Image Salad"
            />
          </div>
        </div>
      </div>
    </>
  );
}
