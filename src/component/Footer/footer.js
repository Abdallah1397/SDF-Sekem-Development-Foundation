import "./footer.scss";

const Footer = () => {
  return (
    <div className="container-fluid sections">
      <section className="row">
        <table className="container sections__table">
          <tr className="sections__tr">
            <td className="sections__td">About Us</td>
            <td className=" sections__td">Media Center</td>
            
            <td style={{color:"white"}} >
              
            Subscribe to our newsletter!
              <div class="input-group sections__input-group" >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                />
                <button
                  class="btn"
                  type="button"
                  id="button-addon2"
                  style={{backgroundColor:"#996a0e"}}
                >
                  Subscribe
                </button>
              </div>
            </td>
            </tr>
          <tr className="sections__tr">
            <td className="sections__td">Careers</td>
            <td className=" sections__td">Contact Us</td>
          </tr>
          <tr>
            <td className=" sections__td">Partnership</td>
            <td className=" sections__td">News & Events</td>
          </tr>
          <tr className="sections__tr">
            <td className=" sections__td">Publications</td>
            <td className=" sections__td">Donate</td>
          </tr>
          <tr></tr>
        </table>
        <div>
          <h5 className="sections__copy-write">
            Copy Write &copy; {new Date().getFullYear()} Sekem Development
            Foundation
          </h5>
        </div>
      </section>
    </div>
  );
};
export default Footer;
