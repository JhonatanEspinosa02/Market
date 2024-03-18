

const Navegation = () => {
  return (
    <div className="bg-[#7AD063] flex justify-between pt-[65px] pb-4">

      <p className="ml-[85px] text-white text-xl flex items-center">XpressMarket</p>

      <ul className="flex gap-6 items-center ml-[65px]">
        <li><a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Home</a></li>
        <li><a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Options</a></li>
        <li><a className="text-white font-semibold text-lg hover:text-[#176027]" href="#">Show All</a></li>
      </ul>

      <ul className="flex mr-[55px] gap-2 items-center">
        <li className="bg-white rounded-full p-1"><img className="h-[35px]" src="/src/assets/2301972.png" alt="AskQuestions" /></li>
        <li className="bg-white rounded-full p-1"><img className="h-[35px]" src="/src/assets/3176101.png" alt="ReturnsAndOrders" /></li>
        <li className="bg-white rounded-full p-1"><img className="h-[35px]" src="/src/assets/7835563.png" alt="ShoppingCar"/></li>

        <li><a className="text-white font-semibold text-lg hover:text-[#176027] ml-[15px]" href="#">Login</a></li>
      </ul>

    </div>
  )
}

export default Navegation