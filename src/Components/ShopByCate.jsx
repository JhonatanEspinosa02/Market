export default function ShopCategory() {
    return (
        <>
            <div className="text-center mt-8">
                <h1 className="text-4xl">Shop by Category</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus quas recus</p>
            </div>

            <div className="p-3 grid sm:grid-cols-5 gap-7 mt-4">
                <div className="text-center text-xl">
                    <img srcSet="./public/images/fruitbox.jpg" alt="Image Fruits"/>
                    <p className="text-xs">Fruits</p>
                </div>
                <div className="text-center text-xl">
                    <img srcSet="./public/images/sweets.jpg" alt="Image Sweets"/>
                     <p className="text-xs">Sweets</p>
                </div>
                <div className="text-center text-xl">
                    <img srcSet="./public/images/darys.jpg" alt="Image Vegetables" />
                     <p className="text-xs">Dairy</p>
                </div>            
                <div className="text-center text-xl">
                    <img srcSet="./public/images/vegetables.webp" alt="Image Vegetables" />
                     <p className="text-xs">Vegetables</p>
                </div>            
                <div className="text-center text-xl">
                    <img srcSet="./public/images/wines.jpg" alt="Image Vegetables" />
                     <p className="text-xs">Wines</p>
                </div>
            </div>
        </>
    )
}