import { motion } from "framer-motion";
import { Box, Typography, Avatar } from "@mui/material";
import Projects from "./Projects"; // Импортируем секцию проектов
import red from "../assets/redFace.jpg";

import '../styles/Main.css'

const Main = () => {
  return (
    <>
      {/* Блок "Обо мне" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
      >
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            // gap: 4,  
            padding: 4,
            // backgroundColor: "#1e1e1e",
            // borderRadius: "10px",
            maxWidth: "100wh",
            height: "100vh",
            // marginTop: "100px",
            // marginLeft: "220px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            paddingTop: "10vh", // Поднимаем вверх
          }}
        >
          <Avatar
            src={red}
            alt="Avatar"
            sx={{
              width: 170,
              height: 170,
              boxShadow: "0px 0px 45px rgb(0, 0, 0)",
              display: "flex",
              justifyContent: "center",
              position: "relative", top: "-30vh",
            }}
          />
          <Box>
            <Typography variant="h4" sx={{ color: "rgb(156, 43, 43)", fontWeight: "bold" }}>
              <strong style={{fontWeight: "bold" }}>Обо мне</strong> 
            </Typography>
            <Typography variant="body1" sx={{ color: "#ffffff", marginTop: 2 }}>
              {"Я фронтенд-разработчик, увлечённый созданием красивых и функциональных интерфейсов."
                .split(" ")
                .map((word, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "rgb(156, 43, 43)" }, // Цвет при наведении
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    {word}
                  </Box>
                ))}
            </Typography>
          </Box>
        </Box>
      </motion.div>

      {/* Секция "Мои проекты" */}
      <Projects />
    </>
  );
};

export default Main;
