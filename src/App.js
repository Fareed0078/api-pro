import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Exchange from "./components/Exchanges.jsx"
import Coin from "./components/Coin.jsx"
import CoinDetails from "./components/CoinDetails.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/coin" element={<Coin/>}/>
        <Route path="/coindetails" element={<CoinDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
