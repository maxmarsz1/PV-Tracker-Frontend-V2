import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import { Container } from "./components/styles/Container.styled";
import { DimmedContainer } from "./components/styles/Dimmed.styled";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
import { LightTheme, DarkTheme } from "./components/themes/Theme";
import MainMenu from "./MainMenu";


function App() {
  const [sidebar, setSidebar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme') === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme);
  }, [darkTheme])
  
  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  }

  const toggleSidebar = () => {
    setSidebar(prev => !prev);
  }

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <Container>
        <Router>
          <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar}/>
          {
            sidebar
            && <>
              <DimmedContainer onClick={toggleSidebar}/>
              <Sidebar toggleSidebar={toggleSidebar}/>
            </>
          }
          <Routes>
            <Route path="/" element={<Home darkTheme={darkTheme}/>} />
            <Route path="/menu/:page" element={<MainMenu darkTheme={darkTheme}/>}>

            </Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
