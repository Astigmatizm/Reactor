import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { SiReact, SiDjango, SiHtml5, SiCss3, SiJavascript, SiMui, SiPython, SiPostgresql, SiDotnet,  SiCplusplus, SiSolidity } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ color: "#121212", mt: 4, textAlign: "center", height: '900px', paddingTop: "90px"}}>
      {/* Заголовок */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "rgb(156, 43, 43)", }}>
        Обо мне
      </Typography>

      {/* Краткая информация */}
      <Typography variant="h6" paragraph>
        Привет! Я <b>Сан</b> – Frontend/Fullstack-разработчик.  
        Работаю с <b>React</b> и <b>Django</b>.  
        Увлекаюсь играми и применением кода в повседневной жизни.
      </Typography>

      {/* Навыки */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Навыки и технологии
        </Typography>
        
        {/* Текущий стек */}
        <Typography variant="h6" sx={{ mt: 2, color: "rgb(156, 43, 43)" }}>
          Работаю с:
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <SiHtml5 size={40} color="#E34F26" />
          <SiCss3 size={40} color="#1572B6" />
          <SiJavascript size={40} color="#F7DF1E" />
          <SiReact size={40} color="#61DAFB" />
          <SiMui size={40} color="#007FFF" />
          <SiDjango size={40} color="#092E20" />
        </Stack>

        {/* Ранее работал */}
        <Typography variant="h6" sx={{ mt: 3, color: "rgb(156, 43, 43)" }}>
          Ранее работал с:
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <SiPython size={40} color="#3776AB" />
          <SiPostgresql size={40} color="#336791" />
          <SiDotnet size={40} color="#239120" />
          <SiCplusplus size={40} color="#00599C" />
          <SiSolidity size={40} color="#363636" />
        </Stack>
      </Box>

      {/* Проекты */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Проекты
        </Typography>
        <Typography variant="body1" paragraph>
          Посмотреть мои проекты можно на главной странице.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "rgb(156, 43, 43)" }} onClick={() => navigate("/")}>
          Перейти к проектам
        </Button>
      </Box>
    </Container>
  );
};

export default About;
