import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top header__nav">
        <div id="navbarSupportedContent" className="container">
          <ul className="navbar-nav  header__ul">
            <li className="nav-item active header__li">
              <a href="#" className="nav-link  font-weight-bold">
                About Us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item header__li">
              <a href="#" className="nav-link  font-weight-bold ">
                Media Center
              </a>
            </li>
            <li className="nav-item header__li">
              <a href="#" className="nav-link  font-weight-bold">
                Careers
              </a>
            </li>
            <li className="nav-item header__li">
              <a href="#" className="nav-link  font-weight-bold">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
