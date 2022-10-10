import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import { Container } from "./components/styles/Container.styled";
import { DimmedContainer } from "./components/styles/Dimmed.styled";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


const mainColors = {
  blue: '#4F9CFE',
  green: '#56E7C1',
  pink: '#F054AA'
}

const theme = {
  light: {
    colors: {
      text: '#6D6D6D',
      background: '#fff',
      hover: '#eee'
    },
    icons: {
      hamburger: "burger_light.png",
      switch: "switch_light.png",
    }
  },
  dark: {
    colors: {
      text: '#FBFBFB',
      background: '#404040',
      hover: '#606060'
    },
    icons: {
      hamburger: "burger_dark.png",
      switch: "switch_dark.png",
    }
  }
}

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
    <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
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
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
