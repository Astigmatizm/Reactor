import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00e5ff", // Неоновый голубой
    },
    secondary: {
      main: "#ff4081", // Ярко-розовый
    },
    background: {
      default: "#1e1e1e", // Чуть светлее для карточек
      paper: "#ffffff", // Глубокий черный фон
      boxShadow: 'inset 0 0 15px rgba(255, 23, 68, 0.5)',
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Можно поменять на свой
  },
});



export default darkTheme;
