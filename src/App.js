import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./store/reducers";
import rootSaga from "./store/sagas";

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Navbar from "./component/NavBar/navnbar";
import Home from "./pages/home";
import Footer from "./component/Footer/footer";
import About from "./pages/about";
import Eeconomic from "./pages/economic";
import Ecological from "./pages/ecological";
import Social from "./pages/socialEmpowerment";
import Cultural from "./pages/cultural";
import MediaCenter from "./pages/mediaCenter";
import Careers from "./pages/carees";
import ContactUs from "./pages/contactUs";
import Partnerships from "./pages/partnerships";

function App() {
  /********************************* Up Top ********************************/
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
  /**********************************************************************/
  /**********************************************************************/

  // confige redux saga
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/economic" component={Eeconomic} />
          <Route exact path="/cultural" component={Cultural} />
          <Route exact path="/social" component={Social} />
          <Route exact path="/ecological" component={Ecological} />
          <Route exact path="/media" component={MediaCenter} />
          <Route exact path="/career" component={Careers} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/partnership" component={Partnerships} />


          {/*  up to top button */}
          <FaRegArrowAltCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? "flex" : "none" }}
          />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
