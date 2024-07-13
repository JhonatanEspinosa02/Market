//Import main pages in this file
import HeaderNavigation from "./Components/MarketReutil/navigation/header_navigation"
import { About } from "./Pages/About/about"
import { Browse } from "./Pages/Browse/browse"
import { Home } from "./Pages/Home/home"

function App() {
  return (
    <>
    {/* By default the navigation here */}
    <HeaderNavigation></HeaderNavigation>
    {/* By default pages in navigation call */}
      <Home/> 
      {/* <Browse></Browse>
      <About></About> */}
    </>
  )
}

export default App