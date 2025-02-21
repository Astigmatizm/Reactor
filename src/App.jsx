import { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
// import darkTheme from "./components/Theme";
// import Header from "./components/Header";
import Main from "./components/Main";
import PageWrapper from "./animations/PageWrapper";
import AnimatedHeader from "./animations/AnimatedHeader";
// import Header from "./components/Header"

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "grey" : "light",
          primary: {
            main: darkMode ? "#ff5722" : "#673ab7",
          },
          background: {
            default: darkMode ? "#121212" : "#ffffff",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <PageWrapper>
        <AnimatedHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <Header  /> */}
        <Main />
      </PageWrapper>
    </ThemeProvider>

    
  );
}

export default App;


