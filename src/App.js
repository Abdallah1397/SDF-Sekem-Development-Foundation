import React, { useState } from "react";
import Navbar from "./component/NavBar/navnbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header/header";
import Home from "./pages/home";
import Footer from "./component/Footer/footer";
import { FaRegArrowAltCircleUp} from "react-icons/fa";
import About from "./pages/about";
import Eeconomic from "./pages/economic";
import Ecological from "./pages/ecological";
import Social from "./pages/socialEmpowerment";
import Cultural from "./pages/cultural";
import MediaCenter from "./pages/mediaCenter";



function App() {
  // state to scrollTop arrow
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    // to check scroll or not
    if (!showScroll && window.pageYOffset > 50) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 50) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>    
        <Route exact path="/about" component={About}/>   
        <Route exact path="/economic" component={Eeconomic}/>    
        <Route exact path="/cultural" component={Cultural}/>    
        <Route exact path="/social" component={Social}/>   
        <Route exact path="/ecological" component={Ecological}/>   
        <Route exact path="/media" component={MediaCenter}/>    
 
 
        <FaRegArrowAltCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
