import apple from "../assets/download-on-the-app-store.png";
import google from "../assets/google-play-badge.png";
import masterCard from "../assets/mastercard-icon-1024x643-j3zb44jj.png";


function Footer() {
  return (
    <footer>
        <div className="flex-row bg-[#176027] p-5 lg:flex justify-center">

            <div className="flex items-center lg:m-5">
                <div className="bg-amber-400 rounded-full w-[100px] h-[100px] ml-2 mb-5">

                </div>
                <div className="ml-10 mb-5 lg:ml-2">
                    <p className="text-white font-bold">Lorem ipsum dolor sit amet. <br /> <span className="text-amber-400 font-semibold"> Sint nesciunt illo.</span></p>
                </div>
            </div>

            <div className="flex items-center lg:m-5">
                <div className="bg-amber-400 rounded-full w-[100px] h-[100px] ml-2 mb-5">

                </div>
                <div className="ml-10 mb-5 lg:ml-2">
                    <p className="text-white font-bold">Lorem ipsum dolor sit amet. <br /> <span className="text-amber-400 font-semibold"> Sint nesciunt illo.</span></p>
                </div>
            </div>

            <div className="flex items-center lg:m-5">
                <div className="bg-amber-400 rounded-full w-[100px] h-[100px] ml-2 mb-5">

                </div>
                <div className="ml-10 mb-5 lg:ml-2">
                    <p className="text-white font-bold">Lorem ipsum dolor sit amet. <br /> <span className="text-amber-400 font-semibold"> Sint nesciunt illo.</span></p>
                </div>
            </div>
        </div> 

        <div className="flex-row bg-[#073912] p-10 lg:flex justify-between">
            <div className="">
                <h1 className="text-white font-bold text-2xl mb-5">About our App</h1>
                <p className="text-white font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Amet incidunt impedit autem voluptatum quia delectus, <br /> dolor deleniti aliquid?</p>
                <div className="flex justify-center gap-10 m-5 lg:justify-start">
                    <a href="https://www.apple.com/app-store/"><img className="h-[45px]" src={apple} alt="apple" /></a>
                    <a href="https://play.google.com/store"><img className="h-[45px]" src={google} alt="google" /></a>
                </div>
            </div>

            <div className="sm:grid grid-cols-2 gap-4 md:flex justify-between">
                <div className="lg:mr-10">
                    <h2 className="text-white font-bold text-xl mb-3 mt-10">Get Connected</h2>
                    <ul>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Blog</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Pricing</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Why XpressMarket?</li></a>
                    </ul>
                </div>
                <div className="lg:mr-10">
                    <h2 className="text-white font-bold text-xl mb-3 mt-10">Support</h2>
                    <ul>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Store</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Community</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Help Center</li></a>
                    </ul>
                </div>
                <div className="lg:mr-10">
                    <h2 className="text-white font-bold text-xl mb-3 mt-10">Company</h2>
                    <ul>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Jobs</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Partnerships</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Politics & Privacy</li></a>
                    </ul>
                </div>
                <div className="lg:mr-10">
                    <h2 className="text-white font-bold text-xl mb-3 mt-10">Social</h2>
                    <ul>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>X</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Facebook</li></a>
                        <a className="text-white font-semibold hover:text-zinc-400" href="#"><li>Instagram</li></a>
                    </ul>
                </div>
            </div>
        </div>
        <div class="border-t border-gray-500"></div>
        <div className=" bg-[#073912] p-5 lg:flex items-center justify-around">
            <p className="text-white font-semibold">©2024 XpressMarket All rights reserved & copyright reserved for developers</p>

            <div className="flex-row sm:flex justify-center gap-5">
                <img className="h-[60px] mt-5 my-5" src={masterCard} alt="masterCard" />
                <img className="h-[60px] mt-5 my-5" src={masterCard} alt="masterCard" />
                <img className="h-[60px] mt-5 my-5" src={masterCard} alt="masterCard" />
                <img className="h-[60px] mt-5 my-5" src={masterCard} alt="masterCard" />

            </div>
        </div>
    </footer>
  )
}

export default Footer