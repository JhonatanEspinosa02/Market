//Import Components
import Header from "../../Components/MarketComponentsNative/HEADER/MarketHeader/Header";
import TopProducts from "../../Components/MarketComponentsNative/HEADER/MarketProducts/TopProducts";
import ShopCategory from "../../Components/MarketComponentsNative/HEADER/MarketShop/ShopByCate";
import Score from "../../Components/MarketComponentsNative/HEADER/MarketScore/Score";
import News from "../../Components/MarketComponentsNative/HEADER/MarketNews/SectionNews";
import Footer from "../../Components/MarketReutil/MarketFooter/Footer";

import './home_styles.css'

export function Home() {
  return (
    <>
      <Header />
      <TopProducts />
      <ShopCategory />
      <Score />
      <News />
      <Footer />
    </>
  );
}
