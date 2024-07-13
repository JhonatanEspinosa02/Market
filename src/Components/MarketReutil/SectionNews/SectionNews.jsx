export default function News() {
    return (
        <>
            <div className="grid place-items-center gap-8 sm:grid-cols-2 p-4 sm:p-24">
                <div>
                    <a href="">
                        <img className="blur-sm hover:blur-none animate-jump animate-once" src="/public/images/news/FullImg.jpeg" alt="Imagen Noticia 1" />
                    </a>
                </div>
                <div className="grid gap-8 sm:grid-cols-1">
                    <div className="flex">
                        <div>
                            <a href="">
                                <img className="blur-sm hover:blur-none h-[10rem] w-[30rem] hover:shadow-lg" src="/public/images/news/cupCakesNews.jpeg" alt="Imagen News 1" />
                            </a>
                        </div>
                        <div className="ml-5">
                            <h2 className="font-bold text-green-700">News Top of  the Week</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea hic odit ipsam animi</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <a href="">
                                <img className="blur-sm hover:blur-none h-[10rem] w-[30rem] hover:bg-slate-600" src="/public/images/news/meatNews.jpg" alt="Imagen News 2" />
                            </a>
                        </div>
                        <div className="ml-5">
                            <h2 className="font-bold text-green-700">News Top of  the Week</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea hic odit ipsam</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}