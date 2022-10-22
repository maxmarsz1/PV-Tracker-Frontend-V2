import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContainer, DataItem, DataItemBig, HomeContainer } from "./components/styles/Layout.styled";
import GearLight from './components/assets/icons/gear_light.png';
import GearDark from './components/assets/icons/gear_dark.png';
import NoteLight from './components/assets/icons/note_light.png';
import NoteDark from './components/assets/icons/note_dark.png';
import ArrowLight from './components/assets/icons/arrow_light.png';
import ArrowDark from './components/assets/icons/arrow_dark.png';
import Settings from "./components/Settings";
import Data from "./components/Data";

const MainMenu = ({darkTheme}) => {
    let {page} = useParams();
    const [element, setElement] = useState(page);
    let navigate = useNavigate();

  return (
    <HomeContainer>
        <DataContainer>
            <DataItem className="pointer" onClick={() => navigate('/')}>
                <img src={darkTheme ? ArrowDark : ArrowLight} alt="arrow"/>
                <span className="menu-title">Powrót</span>
            </DataItem>
            <DataItem className="pointer" onClick={() => {navigate('/menu/data'); setElement('data')}}>
                <img src={darkTheme ? NoteDark : NoteLight} alt="note"/>
                <span className="menu-title">Dane</span>
            </DataItem>
            <DataItem className="pointer" onClick={() => {navigate('/menu/settings'); setElement('settings')}}>
                <img src={darkTheme ? GearDark : GearLight} alt="gear"/>
                <span className="menu-title">Ustawienia</span>
            </DataItem>
            <DataItemBig>
                {
                    element === 'settings'
                    ? <Settings />
                    : <Data />
                }
            </DataItemBig>
        </DataContainer>
    </HomeContainer>
  )
}

export default MainMenu