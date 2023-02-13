import { useNavigate } from "react-router-dom";
import { NavbarContainer } from "./styles/Navbar.styled";
import SwitchDark from "./assets/icons/switch_dark.png";
import SwitchLight from "./assets/icons/switch_light.png";

const Navbar = ({ darkTheme, toggleTheme }) => {
  let navigate = useNavigate();
  let path = window.location.pathname;
  return (
    <NavbarContainer>
      {path === "/landing" ? (
        <>
          <span></span>
          <span className="landing-login"><u><b>Zaloguj</b></u> lub <u><b>zarejestruj się</b></u></span>
        </>
      ) : (
        <>
          <span className="logo" onClick={() => navigate("/")}>
            PVTracker
          </span>
          <span className="links">
            <ul>
              <li onClick={() => navigate("/")}>Strona Główna</li>
              <li onClick={() => navigate("/data")}>Dane</li>
              <li onClick={() => navigate("/settings")}>Ustawienia</li>
              <li onClick={() => navigate("/logout")}>Wyloguj</li>
            </ul>
            <img
              src={darkTheme ? SwitchDark : SwitchLight}
              onClick={toggleTheme}
              alt="switch"
            />
          </span>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
