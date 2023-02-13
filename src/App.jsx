import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import { Container } from "./components/styles/Container.styled";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Data from "./Data";
import Settings from "./Settings";
import Info from "./Info";
import { LightTheme, DarkTheme } from "./components/themes/Theme";
import Landing from "./Landing";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("darkTheme") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <Container>
        <Router>
          <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home darkTheme={darkTheme} />} />
            <Route
              path="/landing"
              element={<Landing darkTheme={darkTheme} />}
            />
            <Route path="/data" element={<Data darkTheme={darkTheme} />} />
            <Route
              path="/settings"
              element={<Settings darkTheme={darkTheme} />}
            />
            <Route path="/info" element={<Info darkTheme={darkTheme} />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
