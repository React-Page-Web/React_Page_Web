import { BsFillPersonFill } from 'react-icons/bs';
import logo from './assets/logo.png';
import "./styles/Style.css";


const Header = () => {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <a href="#">Templates</a>
        </li>
        <li>
          <a href="#">Bundles</a>
        </li>
        <li>
          <a href="#">Snippets</a>
        </li>
        <li>
          <a href="#">Freebies</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Hire Us</a>
        </li>
        <li>
        <BsFillPersonFill />
          <a href="#">Login/Register</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header