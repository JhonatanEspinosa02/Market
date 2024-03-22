import Button from "./Button";

export default function Header() {
    return (
        <>
            <div className="bg-[#176027] flex p-3">
                <div className="flex items-center mx-auto">
                    <p className="text-white mr-8 font-semibold">Weeks Off</p>
                    <p className="text-white bg-[#7AD063D6] px-2 font-semibold">15% off</p>
                </div>
            </div>

            <div className="bg-[#7AD063] pt-16">
                <nav className=" sm:flex justify-around ">
                    <div className="">
                        <a href="#" className="text-white text-xl flex items-center">XpressMarket</a>
                    </div>
                    <div className="flex gap-4">
                        <a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Home</a>
                        <a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Options</a>
                        <a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Show All</a>
                    </div>
                    <div className="justify-col sm:flex justify-around gap-8">
                        <a href="#">
                            <img className="h-[35px]" src="/src/assets/2301972.png" alt="AskQuestions" />
                        </a>
                        <a href="#">
                            <img className="h-[35px]" src="/src/assets/3176101.png" alt="ReturnsAndOrders" />
                        </a>
                        <a href="#">
                            <img className="h-[35px]" src="/src/assets/7835563.png" alt="ShoppingCar" />
                        </a>

                    </div>
                    <div>
                        <a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Login</a>
                    </div>
                </nav>
            </div>

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




            <div
                className="h-auto p-5"
                style={{ backgroundColor: "#7AD063" }}
            >
                <div className="place-items-center sm:grid grid-cols-2">
                    <div>
                        <p className="text-white text-1xl leading-4 font-bold mb-5">Title heading of mall online</p>

                        <h1 className="text-white text-5xl font-bold">
                            Eat clean & green, <br /> Eat organic
                        </h1>
                        <p className="text-white text-1xl mt-5 leading-normal">
                            Lorem ips quas velit atque cumque <br /> asperiores neque porro sint, possimus ips quas velit .
                        </p>

                        <Button />
                    </div>

                    <div className="relative inset-0 flex">
                        <img className="hidden sm:flex items-center animate-slideInRight"
                            srcSet="./public/images/saladMain-removebg-preview.png"
                            alt="Image Salad"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}