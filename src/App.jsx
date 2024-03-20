// import Promotion from "./Components/Promotions";
// import Navigation from "./Components/Navigation";
// import EatClean from "./Components/EatClean";
import Header from "./Components/Header"
import SectionProductsTop from "./Components/SectionProducts/SectionProductsTop"
import ShopCategory from "./Components/ShopByCate"
import TopProducts from "./Components/TopProducts"



const App = () => {
  return (
    <>
    {/* I delete four components and traspase a only just one component her name Header, the files are in trash */}
    <Header/>
    <TopProducts/>
    <ShopCategory/>
    <SectionProductsTop/>
    </>
  )
}

export default App