//Import Components
import Header from "../../Components/MarketComponentsNative/MarketHeader/Header";
import TopProducts from "../../Components/MarketComponentsNative/MarketProducts/TopProducts";
import ShopCategory from "../../Components/MarketComponentsNative/MarketShop/ShopByCate";
import Score from "../../Components/MarketComponentsNative/MarketScore/Score";
import News from "../../Components/MarketComponentsNative/MarketNews/SectionNews";
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
