import { useState } from "react";
import Button from "./Button";
import close from "../assets/close.png";
import menu from "../assets/menus.png";
import navLinks from "../constants/links";
import navLinksImg from "../constants/img";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-[#176027] flex p-3">
        <div className="flex items-center mx-auto">
          <p className="text-white mr-8 font-semibold">Weeks Off</p>
          <p className="text-white bg-[#7AD063D6] px-2 font-semibold">
            15% off
          </p>
        </div>
      </div>

      <div className="bg-[rgb(122,208,99)] pt-16">
        <nav className="">
          <div className="flex items-center justify-around">
            <div className="mx-14">
              <a href="#" className="text-white text-xl flex items-center">
                XpressMarket
              </a>
            </div>

            <div className="sm:hidden m-[25px]">
              <img
                src={toggle ? close : menu}
                alt="toogle"
                className="w-[40px]"
                onClick={() => setToggle((prev) => !prev)}
              />
            </div>
            
            <div className={`${toggle ? 'flex' : 'hidden'}  absolute bg-neutral-900 p-6 top-20`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                            <a href={`#${nav.id}`}> {nav.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
















          </div>

          <div className="flex max-sm:hidden">
            <div className="justify-col sm:flex justify-around gap-8">
              {navLinksImg.map((linkImg) => (
                <div key={linkImg.id}>
                  <a href="#">
                    <img className="h-[42px]" src={linkImg.img} alt="img" />
                  </a>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {navLinks.map((nav, index) => (
                <div
                  key={nav.id}
                  className={`${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } text-white`}
                >
                  <a
                    className="text-white font-semibold text-lg hover:text-[#176027]"
                    href={`#${nav.id}`}
                  >
                    {nav.title}
                  </a>
                </div>
              ))}
            </div>




          </div>
        </nav>
      </div>

      {/* <div className="flex justify-around max-sm:hidden">     
                <div className="flex gap-4">
                    <a
                    className="text-white font-semibold text-lg hover:text-[#176027]"
                    href="#"
                    >
                    Home
                    </a>
                    <a
                    className="text-white font-semibold text-lg hover:text-[#176027]"
                    href="#"
                    >
                    Options
                    </a>
                    <a
                    className="text-white font-semibold text-lg hover:text-[#176027]"
                    href="#"
                    >
                    Show All
                    </a>
                </div>
                <div className="justify-col sm:flex justify-around gap-8">
                     <a href="#">
                        <img
                        className="h-[35px]"
                        src="/src/assets/2301972.png"
                        alt="AskQuestions"
                        />
                    </a>
                    <a href="#">
                    <img
                        className="h-[35px]"
                        src="/src/assets/3176101.png"
                        alt="ReturnsAndOrders"
                    />
                    </a>
                    <a href="#">
                    <img
                        className="h-[35px]"
                        src="/src/assets/7835563.png"
                        alt="ShoppingCar"
                        />
                    </a>
                </div>
                <div>
                    <a
                    className="text-white font-semibold text-lg hover:text-[#176027]"
                    href="#"
                    >
                    Login
                    </a>
                </div>
            </div> */}

      {/* <div className="bg-[#7AD063] flex justify-between pt-[65px] pb-4 sm:grid-cols-2">

                <p className="ml-[85px] text-white text-xl flex items-center">XpressMarket</p>

                <ul className="flex gap-6 items-center ml-[65px]">
                    <li><a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Home</a></li>
                    <li><a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Options</a></li>
                    <li><a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Show All</a></li>
                </ul>

                <ul className="flex mr-[55px] gap-2 items-center">
                    <li className="bg-white rounded-full p-1"><img className="h-[35px]" src="/src/assets/2301972.png" alt="AskQuestions" /></li>
                    <li className="bg-white rounded-full p-1"><img className="h-[35px]" src="/src/assets/3176101.png" alt="ReturnsAndOrders" /></li>
                    <li className="bg-white rounded-full p-1"><img className="h-[35px]" src="/src/assets/7835563.png" alt="ShoppingCar" /></li>

                    <li><a className="text-white font-semibold text-lg hover:text-[#176027] ml-[15px]" href="#">Login</a></li>
                </ul>

            </div> */}

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
