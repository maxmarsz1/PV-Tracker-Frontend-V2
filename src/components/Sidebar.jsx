import { SidebarContainer } from "./styles/Sidebar.styled"

const Sidebar = ({toggleSidebar}) => {
  return (
    <SidebarContainer>
        <div onClick={toggleSidebar}>Powrót</div>
        <div>Dane</div>
        <div>Ustawienia</div>
        <div>Wyloguj</div>
    </SidebarContainer>
  )
}

export default Sidebar