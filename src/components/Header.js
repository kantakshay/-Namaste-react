
import logo from "../../image/KhaoNaLogo.png";

const Title = () => <img src={logo} alt="logo" id="logo" />;



const Header = () => (
    <div id="navBar">
      <Title />
      <div>
        <ul className="navItems">
          <li className="navItemlist">Home</li>
          <li className="navItemlist">About</li>
          <li className="navItemlist">contact</li>
          <li className="navItemlist">cart</li>
        </ul>
      </div>
    </div>
  
  );

  export default Header;