//Import Components
import Header from "../../Components/MarketComponentsNative/HEADER/MarketHeader/Header";
import TopProducts from "../../Components/MarketComponentsNative/HEADER/CategoryProducts/CategoryProducts"
import ShopCategory from "../../Components/MarketComponentsNative/HEADER/ProductsByCategory/ProductsByCategory";
import Score from "../../Components/MarketComponentsNative/HEADER/MarketScore/Score";
import News from "../../Components/MarketReutil/SectionNews/SectionNews";
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
