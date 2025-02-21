import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./components/Theme";
// import Header from "./components/Header";
import About from "./components/About";
import PageWrapper from "./animations/PageWrapper";
import AnimatedHeader from "./animations/AnimatedHeader";
import NeonHeader from "./animations/NeonHeader";

import './App.css';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <PageWrapper>
        <AnimatedHeader />
        <NeonHeader />
        <About />
      </PageWrapper>
        <div className="banner-Data">хеллооо</div> 
    </ThemeProvider>
  );
}

export default App;
