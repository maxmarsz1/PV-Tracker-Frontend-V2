import { useNavigate, useParams } from "react-router-dom";
import { DataContainer, DataItemBig, HomeContainer, MenuButton } from "./components/styles/Layout.styled";
import GearLight from './components/assets/icons/gear_light.png';
import GearDark from './components/assets/icons/gear_dark.png';
import NoteLight from './components/assets/icons/note_light.png';
import NoteDark from './components/assets/icons/note_dark.png';
import InfoLight from './components/assets/icons/info_light.png';
import InfoDark from './components/assets/icons/info_dark.png';
import Settings from "./components/Settings";
import Data from "./components/Data";
import Info from "./components/Info";

const MainMenu = ({darkTheme}) => {
    const pages = {
        'settings': <Settings/>,
        'data': <Data/>,
        'info': <Info/>
    }
    let {page} = useParams();
    let navigate = useNavigate();

  return (
    <HomeContainer>
        <DataContainer>
            <MenuButton onClick={() => navigate('/menu/data')}>
                <img src={darkTheme ? NoteDark : NoteLight} alt="note"/>
                <span className="menu-title">Dane</span>
            </MenuButton>
            <MenuButton onClick={() => navigate('/menu/settings')}>
                <img src={darkTheme ? GearDark : GearLight} alt="gear"/>
                <span className="menu-title">Ustawienia</span>
            </MenuButton>
            <MenuButton onClick={() => navigate('/menu/info')}>
                <img src={darkTheme ? InfoDark : InfoLight} alt="info"/>
                <span className="menu-title">Informacje</span>
            </MenuButton>
            <DataItemBig>
                {
                 pages[page] ? pages[page] : <Data />
                }
            </DataItemBig>
        </DataContainer>
    </HomeContainer>
  )
}

export default MainMenu