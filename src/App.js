import "./App.css";
import logo from "./logo.png";
import shoe from "./shoe.png";
import shoe2 from "./shoe2.png";
import menu from "./menu.png";

function App() {
  const toggleClick = () => {
    let list = document.querySelector(".two");
    if (list.style.maxHeight == "0px") {
      list.style.maxHeight = "300px";
    } else {
      list.style.maxHeight = "0px";
    }
  };
  return (
    <div className="App">
      <ul>
        <div className="one">
          <img className="logo" src={logo} width="40px" />
          <li>SUPER SHOES</li>
        </div>
        <div className="two">
          <li>
            <a href="index.html">HOME</a>
          </li>
          <li>
            <a href="shop.html">SHOP</a>
          </li>
          <li>
            <a href="contact.html">CONTACT</a>
          </li>
          <li>
            <a href="about.html">ABOUT</a>
          </li>
        </div>
        <img
          src={menu}
          width="30px"
          className="menuicon"
          onClick={toggleClick}
        />
      </ul>
      <div className="left-container">
        <div className="text">
          <img src={shoe2} />
          <h1>Super Shoes</h1>
          <p>We've got the perfect shoes for you.</p>
          <button className="btn">
            <a href="shoes.html">SHOP NOW</a>
          </button>
        </div>
        <img src={shoe} />
      </div>
    </div>
  );
}

export default App;
