import React, { useState } from "react";
import Navbar from "./component/NavBar/navnbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header/header";
import Home from "./pages/home";
import Footer from "./component/Footer/footer";
import { FaRegArrowAltCircleUp} from "react-icons/fa";

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
        <Header />
        <Navbar />
        <Route exact path="/" component={Home}/>        
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
