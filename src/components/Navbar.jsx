import { NavbarContainer } from "./styles/Navbar.styled";
import BurgerDark from './assets/icons/burger_dark.png';
import BurgerLight from './assets/icons/burger_light.png';
import SwitchDark from './assets/icons/switch_dark.png';
import SwitchLight from './assets/icons/switch_light.png';

const Navbar = ({darkTheme, toggleTheme, toggleSidebar}) => {
  return (
    <NavbarContainer>
        <img src={darkTheme ? BurgerDark : BurgerLight} onClick={toggleSidebar} alt="burger" />
        <span>PVTracker</span>
        <img src={darkTheme ? SwitchDark : SwitchLight} onClick={toggleTheme} alt="switch" />
    </NavbarContainer>
  )
}

export default Navbar