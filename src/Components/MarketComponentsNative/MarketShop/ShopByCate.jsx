export default function ShopCategory() {
    return (
        <>
            <div className="text-center mt-8">
                <h1 className="text-4xl">Shop by Category</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus quas recus</p>
            </div>

            <div className="p-3 grid place-items-center sm:grid-cols-5 gap-7 mt-4">
                <a href="" className="bg-amber-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-amber-600 duration-300">
                    <div className="text-center text-xl">
                        <img srcSet="./public/images/imagesShopBYCategory/fruitbox.jpg" alt="Image Fruits" />
                        <p className="text-xs p-4">Fruits</p>
                    </div>
                </a>
                <a href="" className="bg-pink-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300">
                    <div className="text-center text-xl">
                        <img srcSet="./public/images/imagesShopBYCategory/sweets.jpg" alt="Image Sweets" />
                        <p className="text-xs p-4">Sweets</p>
                    </div>
                </a>
                <a href="" className="bg-slate-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 duration-300">
                    <div className="text-center text-xl">
                        <img srcSet="./public/images/imagesShopBYCategory/darys.jpg" alt="Image Vegetables" />
                        <p className="text-xs p-4">Dairy</p>
                    </div>
                </a>
                <a href="" className="bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300">
                    <div className="text-center text-xl">
                        <img srcSet="./public/images/imagesShopBYCategory/vegetables.jpg" alt="Image Vegetables" />
                        <p className="text-xs p-4">Vegetables</p>
                    </div>
                </a>
                <a href="" className="bg-purple-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300">
                    <div className="text-center text-xl">
                        <img srcSet="./public/images/imagesShopBYCategory/wines.jpg" alt="Image Vegetables" />
                        <p className="text-xs p-4">Wines</p>
                    </div>
                </a>
            </div>
        </>
    )
}