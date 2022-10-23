import { SidebarContainer } from "./styles/Sidebar.styled"
import { useNavigate } from "react-router-dom"

const Sidebar = ({toggleSidebar}) => {
  let navigate = useNavigate();
  
  return (
    <SidebarContainer>
        <div onClick={toggleSidebar}>Powrót</div>
        <div onClick={() => {navigate("/"); toggleSidebar()}}>Strona główna</div>
        <div onClick={() => {navigate("/menu/data"); toggleSidebar()}}>Dane</div>
        <div onClick={() => {navigate("/menu/settings"); toggleSidebar()}}>Ustawienia</div>
        <div onClick={() => {navigate("/menu/info"); toggleSidebar()}}>Informacje</div>
        <div>Wyloguj</div>
    </SidebarContainer>
  )
}

export default Sidebar