import Navbar from './component/NavBar/navnbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './component/Header/header';
import Home from './pages/home';
import Footer from './component/Footer/footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Navbar/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
