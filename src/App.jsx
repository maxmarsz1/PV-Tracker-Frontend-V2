import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import { Container } from "./components/styles/Container.styled";
import { DimmedContainer } from "./components/styles/Dimmed.styled";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
import { LightTheme, DarkTheme } from "./components/themes/Theme";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sidebar, setSidebar] = useState(false);

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
        <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar}/>
        {
          sidebar
          && <>
            <DimmedContainer onClick={toggleSidebar}/>
            <Sidebar toggleSidebar={toggleSidebar}/>
          </>
        }
        <Router>
          <Routes>
            <Route path="/" element={<Home darkTheme={darkTheme}/>} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
