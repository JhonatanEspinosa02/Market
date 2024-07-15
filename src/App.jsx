import { Routes, Route } from "react-router-dom";
//Import main pages in this file
import HeaderNavigation from "./Components/MarketReutil/navigation/header_navigation";

//Navigations pages
import { About } from "./Pages/About/about";
import { Browse } from "./Pages/Browse/browse";
import { Home } from "./Pages/Home/home";
import PresentationPageMain from "./Pages/PresentationPage/Presentation";
import OrdersUser from "./Pages/Orders/orders";
import CustomerLogin from "./Pages/Auth/LoginCustomer/customer";
import SellerLogin from "./Pages/Auth/LoginSeller/seller";

function App() {
  return (
    <>
      {/* By default the navigation here */}
      <Routes>
        <Route path="/" element={<HeaderNavigation></HeaderNavigation>}>
        <Route path="/" element={<PresentationPageMain></PresentationPageMain>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/orders" element={<OrdersUser></OrdersUser>}></Route>
          <Route path="/browse" element={<Browse></Browse>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/customer-login" element={<CustomerLogin></CustomerLogin>}></Route>
          <Route path="/seller-login" element={<SellerLogin></SellerLogin>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
