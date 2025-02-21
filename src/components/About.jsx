import { motion } from "framer-motion";
import { Box, Typography, Avatar } from "@mui/material";
import red from '../assets/redFace.jpg'

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Исходное состояние (снизу)
      animate={{ opacity: 1, y: 0 }} // Плавное появление
      transition={{ duration: 1, delay: 1.3 , ease: "easeOut" }} // Плавность
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        //   alignItems: "center",
          gap: 4,
          padding: 4,
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
        //   boxShadow: "1px 0px 15px #ffffff",
          maxWidth: "1300px",
          height: '600px',
          marginTop: '100px',
          marginLeft: '220px',
        //   margin: "auto",
        }}
      >
        {/* Аватар */}
        <Avatar
          src={red} // Заменить на своё фото
          alt="Avatar"
          sx={{
            width: 120,
            height: 120,
            // border: "4px solid #00e5ff",
            boxShadow: "0px 0px 45px rgb(0, 0, 0)",
          }}
        />

        {/* Текст */}
        <Box>
          <Typography variant="h4" sx={{ color: "rgb(156, 43, 43)", fontWeight: "bold" }}>
            {/* Баухажан Санжар */}  Обо мне
          </Typography>

          <Typography variant="body1" sx={{ color: "#ffffff", marginTop: 2 }}>
            Я фронтенд-разработчик, увлечённый созданием красивых и функциональных интерфейсов. 
            Работаю с React, MUI и анимациями.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutMe;