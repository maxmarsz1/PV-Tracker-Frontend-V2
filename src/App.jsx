import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import { Container } from "./components/styles/Container.styled";
import Navbar from "./components/Navbar";


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
    },
    icons: {
      hamburger: "burger_dark.png",
      switch: "switch_dark.png",
    }
  }
}

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  }
  return (
    <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
      <GlobalStyles />
      <Container>
        <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
