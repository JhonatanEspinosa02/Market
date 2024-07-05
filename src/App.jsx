// import Promotion from "./Components/Promotions";
// import Navigation from "./Components/Navigation";
// import EatClean from "./Components/EatClean";
import Header from "./Components/MarketComponentsNative/MarketHeader/Header"
import TopProducts from "./Components/MarketComponentsNative/MarketProducts/TopProducts"
import ShopCategory from "./Components/MarketComponentsNative//MarketShop/ShopByCate"
import Score from "./Components/MarketComponentsNative/MarketScore/Score"
import News from "./Components/MarketComponentsNative/MarketNews/SectionNews"
import Footer from "./Components/MarketComponentsNative/MarketFooter/Footer"



function App() {
  return (
    <>
      {/* I delete four components and traspase a only just one component her name Header, the files are in trash */}
      <Header />
      <TopProducts />
      <ShopCategory />
      <Score/>
      <News/>
      <Footer/>

    </>
  )
}

export default App