import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import PageWrapper from "./animations/PageWrapper";
import AnimatedHeader from "./animations/AnimatedHeader";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <PageWrapper>
        <CssBaseline />
        <AnimatedHeader />
        {/* <Header /> Добавляем хэдер, чтобы он был на всех страницах */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;