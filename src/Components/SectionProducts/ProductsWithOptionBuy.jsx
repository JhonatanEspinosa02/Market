export default function ProductsOption() {
    return (
        <>

            <div className="p-6">
                <ul className="flex gap-3 mt-5">
                    <li>
                        <img src="" alt="Image Article" />
                    </li>
                    <li>
                        <p>Description Article</p>
                    </li>
                    <div className="flex place-items-center gap-4">
                        <li>
                            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+</button>
                        </li>
                        <li><input type="number" /></li>
                        <li><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">-</button></li>
                    </div>
                    <a href="#" className="bg-white text-1xl"><button>More options</button></a>
                </ul>
            </div>

            <div className="p-6">
                <ul className="flex gap-3 mt-5">
                    <li>
                        <img src="" alt="Image Article" />
                    </li>
                    <li>
                        <p>Description Article</p>
                    </li>
                    <div className="flex place-items-center gap-4">
                        <li>
                            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+</button>
                        </li>
                        <li><input type="number" /></li>
                        <li><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">-</button></li>
                    </div>
                    <a href="#" className="bg-white text-1xl"><button>More options</button></a>
                </ul>
            </div>
        </>
    )
}