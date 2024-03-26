// import Promotion from "./Components/Promotions";
// import Navigation from "./Components/Navigation";
// import EatClean from "./Components/EatClean";
import Header from "./Components/Header"
import TopProducts from "./Components/TopProducts"
import ShopCategory from "./Components/ShopByCate"
import Score from "./Components/Score"
import News from "./Components/SectionNews"
import Footer from "./Components/Footer"


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