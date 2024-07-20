//Import Library
import { Outlet, Link } from "react-router-dom";
import { LOCALS_NAVIGATION } from "../../MarketComponentsNative/HEADER/MarketHeader/locales/locals_navigation";

//Destructuring in object
const {IMAGES,NAVIGATION} = LOCALS_NAVIGATION;
const {homeNavigation, browseCategory, aboutUsNavigation, ordersNavigation, loginCustomer, loginSeller} = NAVIGATION

export default function HeaderNavigation(){
  return(
    <>
    <nav className="bg-[#7ad063] pt-3">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 items-center">
          <div className="flex items-center flex-1">
            <Link to="/">
              <span className="text-3xl font-bold">XpressMarket</span>
            </Link>
          </div>
          <div className="lg:flex xl:flex xl:flex-1 items-center justify-end font-normal hidden">
            <div className="flex items-center flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to="/home">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {homeNavigation}
                  </li>
                </Link>
                <Link to="/browse">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {browseCategory}
                  </li>
                </Link>
                <Link to="/orders">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {ordersNavigation}
                  </li>
                </Link>
                <Link to="/about">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {aboutUsNavigation}
                  </li>
                </Link>
              </ul>
              <ul className="flex gap-5 px-10">
                <Link
                  to="/carShop"
                  className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
                >
                  <img className="h-[20px]" src={IMAGES.carIcon} alt="car" />
                </Link>
                <Link
                  to="/messages"
                  className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
                >
                  <img
                    className="h-[20px]"
                    src={IMAGES.messageIcon}
                    alt="message"
                  />
                </Link>
              </ul>
              <ul>
                <Link to="/seller-login">
                  <li className="hover:text-[#176027] cursor-pointer text-xl">
                  {loginSeller}
                  </li>
                </Link>
                <Link to="/customer-login">
                <li className="hover:text-[#176027] cursor-pointer text-xl">
                  {loginCustomer}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  )

}