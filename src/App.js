import About from "./pages/aboutPage/About";
import Portfolio from "./pages/portfolioPage/Portfolio";
import Contacat from "./pages/contactPage/Contacat";
import Carousal from "./components/Carousal/Carousal";
import Service from "./pages/servicePage/Service";
import Home from "./pages/homePage/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>

      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contacat />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
