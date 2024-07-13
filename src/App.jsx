import { Routes, Route } from "react-router-dom";
//Import main pages in this file
import HeaderNavigation from "./Components/MarketReutil/navigation/header_navigation";

//Navigations pages
import { About } from "./Pages/About/about";
import { Browse } from "./Pages/Browse/browse";
import { Home } from "./Pages/Home/home";

function App() {
  return (
    <>
      {/* By default the navigation here */}
      <Routes>
        <Route path="/" element={<HeaderNavigation></HeaderNavigation>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/browse" element={<Browse></Browse>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
