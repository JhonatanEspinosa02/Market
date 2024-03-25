export default function Score() {
    return (
        <>
            <div className="grid place-items-center sm:grid-cols-2 bg-neutral-700">
                <div>
                    <div className="bg-green-800 p-12 m-12 text-center text-white">
                        <div className="grid place-items-center">
                            <h2 className="font-extrabold text-green-600 text-7xl">4.9</h2>
                            <img srcSet="/public/images/stars.png" alt="Five Stars Score Card" />
                        </div>
                        <div>
                            <p className="mb-5 font-bold">Lorem ipsum dolor sit amet consectetur</p>
                            <p className="text-green-500">Lorem ipsum dolor consectetur <br /><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                        </div>

                    </div>
                </div>
                <div className="p-5">
                    <div className="flex items-center">
                        <img className="h-[3rem]" src="/public/images/pictureProfile.webp" alt="Profile Photo" />
                        <p className="text-green-500 font-bold ml-4">Nico, Wife of Jhonatan</p>
                    </div>
                    <div className="mt-8 text-white text-sm">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe perferendis asperiores voluptas. Odio quidem ex provident nihil quam laudantium consequuntur, esse, tempore dolorem, maxime perspiciatis eos dicta asperiores libero.
                            Corrupti, sint aliquam? Esse voluptate qui non placeat accusamus! Veniam hic asperiores illum! Reiciendis fugiat ad repudiandae tempore.</p>
                    </div>
                </div>
            </div>
        </>
    )
}