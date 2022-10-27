import { useNavigate } from "react-router-dom";
import { NavbarContainer } from "./styles/Navbar.styled";
import BurgerDark from './assets/icons/burger_dark.png';
import BurgerLight from './assets/icons/burger_light.png';
import SwitchDark from './assets/icons/switch_dark.png';
import SwitchLight from './assets/icons/switch_light.png';


const Navbar = ({darkTheme, toggleTheme, toggleSidebar}) => {
  let navigate = useNavigate();
  return (
    <NavbarContainer>
        <img className="burger-menu" src={darkTheme ? BurgerDark : BurgerLight} onClick={toggleSidebar} alt="burger" />
        <span className="logo" onClick={() => navigate('/')}>PVTracker</span>
        <span className="links">
          <ul>
            <li onClick={() => navigate('/')}>Strona Główna</li>
            <li onClick={() => navigate('/data')}>Dane</li>
            <li onClick={() => navigate('/settings')}>Ustawienia</li>
            <li onClick={() => navigate('/info')}>Info</li>
          </ul>
          <img src={darkTheme ? SwitchDark : SwitchLight} onClick={toggleTheme} alt="switch" />
        </span>
    </NavbarContainer>
  )
}

export default Navbar