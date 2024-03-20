import ProductsOption from "./ProductsWithOptionBuy";

export default function ProductsTop() {
    return (
        <>
            <div className="grid place-items-center sm:grid-cols-2" style={{ backgroundColor: '#B7EBF2' }}>
                <div className="grid md:grid-cols-2">
                    {/* //TODO: Here grid for images */}
                    <div className="flex gap-4">
                        <img src="" alt="Product Image one" />
                        <p>Description Product</p>
                    </div>

                    <div className="flex gap-4">
                        <img src="" alt="Product Image two" />
                        <p>Description Product</p>
                    </div>


                    <div className="flex gap-4">
                        <img src="" alt="Product Image three" />
                        <p>Description Product</p>
                    </div>

                    <div className="flex gap-4">
                        <img src="" alt="Product Image Four" />
                        <p>Description Product</p>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <ProductsOption />
                </div>
            </div>
        </>
    )
}