//Import Library
import { LOCALS_NAVIGATION } from "../../MarketComponentsNative/HEADER/MarketHeader/locales/locals_navigation";
//Destructur in object
const {IMAGES,NAVIGATION} = LOCALS_NAVIGATION;
const {homeNavigation, browseCategory, aboutUsNavigation, ordersNavigation, loginCustomer, loginSeller} = NAVIGATION

export default function HeaderNavigation(){
  return(
    <>
    <nav className="bg-[#7ad063] pt-3">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 items-center">
          <div className="flex items-center flex-1">
            <a href="#">
              <span className="text-3xl font-bold">XpressMarket</span>
            </a>
          </div>
          <div className="lg:flex xl:flex xl:flex-1 items-center justify-end font-normal hidden">
            <div className="flex items-center flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <a href="#">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {homeNavigation}
                  </li>
                </a>
                <a href="#">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {browseCategory}
                  </li>
                </a>
                <a href="<<History>>">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {ordersNavigation}
                  </li>
                </a>
                <a href="<<History>>">
                  <li className="hover:text-[#176027] cursor-pointer text-xl animate-jump animate-once">
                    {aboutUsNavigation}
                  </li>
                </a>
              </ul>
              <ul className="flex gap-5 px-10">
                <a
                  href="#"
                  className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
                >
                  <img className="h-[20px]" src={IMAGES.carIcon} alt="car" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
                >
                  <img
                    className="h-[20px]"
                    src={IMAGES.messageIcon}
                    alt="message"
                  />
                </a>
              </ul>
              <ul>
                <a href="#">
                  <li className="hover:text-[#176027] cursor-pointer text-xl">
                  {loginSeller}
                  </li>
                </a>
                <a href="">
                <li className="hover:text-[#176027] cursor-pointer text-xl">
                  {loginCustomer}
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )

}