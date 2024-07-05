import Button from './../MarketButton/Button';

export default function TopProducts() {
  return (
    <>
      <div className="mt-8 text-center grid gap-2 mx-5 lg:mx-24">
        <div className="grid md:grid-cols-3 gap-5">

          <div className="p-3 h-56 bg-cyan-100 grid grid-cols-2 overflow-hidden bg-coffee bg-contain bg-no-repeat bg-right">
            <div className="m-5 text-left">
              <span className="text-red-700 text-xl font-extrabold">Get inspired.</span>
              <h2 className="text-[#176027] font-extrabold text-xl">Great moments, <br /> good coffee</h2>
                <Button/>
            </div>
          </div>

          <div className='p-3 h-56 bg-[#FDD3C2] flex items-center justify-center bg-groceries'>
            <div className='m-5'>
              <div className='mb-10'>
               <h2 className='font-extrabold text-2xl text-green-900'>Be nutritious, <br /> <span className='text-lime-800'> be healthy </span></h2>
              </div>
              <Button/>
            </div>
          </div>

          <div className='p-3 h-56 bg-[#FDE5DB] bg-bread bg-cover'>
            <div className="m-5 text-left">
              <span className="text-lime-800 text-xl font-extrabold">Bakery.</span>
              <h2 className="text-red-700 font-extrabold text-2xl mb-3">Offer 30% off <br /> <span className='text-green-900 text-xl'> Warmth in loaves</span></h2>
                <Button/>
            </div>
          </div>

          <div className='p-3 h-56 bg-[#B6F2A6] flex items-center justify-center bg-salmon'>
            <div className='m-5'>
              <div className='mb-10'>
               <h2 className='font-extrabold text-2xl text-green-900'>Grilled salmon, <br /> <span className='text-lime-800'>River's delight </span></h2>
              </div>
              <Button/>
            </div>
          </div>

          <div className='p-3 h-56 bg-[#FAB5CB] bg-quaker bg-contain bg-no-repeat bg-right'>
            <div className="m-5 text-left">
              <span className="text-lime-800 text-xl font-extrabold">Brand.</span>
              <h2 className="text-red-700 font-extrabold text-xl mb-6">Offer 15% off <br /> <span className='text-green-900 text-xl'> Chocolate 115g</span></h2>
                <Button/>
            </div>
          </div>

          <div className='p-3 h-56 bg-[#A9F6BA] flex items-center justify-center bg-serrano'>
            <div className='m-5'>
              <div className='mb-10'>
               <h2 className='font-extrabold text-2xl text-green-900'>Serrano Ham, <br /> <span className='text-lime-800'> Slice of Spain </span></h2>
              </div>
              <Button/>
            </div>
          </div>

 

 

          {/* <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#FAB5CB" }}
            >
              <p>Lunch in the Morning</p>
            </div>
          </a> */}

          {/* <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#A9F6BA" }}
            >
              <p>Fruit in the Morning</p>
            </div>
          </a> */}




         {/* <div className="grid sm:grid-cols-3 gap-5">
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#B6F2A6" }}
            >
              <p>Coffe on Sundays</p>
            </div>
          </a>
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#FAB5CB" }}
            >
              <p>Lunch in the Morning</p>
            </div>
          </a>
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#A9F6BA" }}
            >
              <p>Fruit in the Morning</p>
            </div>
          </a> */}










        </div>
      </div>
      
      </>   
    )   
  }
