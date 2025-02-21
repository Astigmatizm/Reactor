import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
// import BS from "../assets/red-BS-little.jpg"
// import BS from "../assets/red-BS-little-redacterd.jpg"


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#121212";
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: darkMode ? "#333" : "#000" }}>
      <Toolbar>
        {/* Логотип */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Портфолио
        </Typography>

        
        {/* Навигация */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit">Проекты</Button>
          <Button color="inherit">Обо мне</Button>
          <Button color="inherit">Навыки</Button>
          <Button color="inherit">Контакт</Button>
        </Box>
        
        {/* Иконки соцсетей */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 2 }}>
          <IconButton color="inherit" href="https://github.com" target="_blank"><GitHubIcon /></IconButton>
          <IconButton color="inherit" href="https://t.me" target="_blank"><TelegramIcon /></IconButton>
        </Box>
        
        {/* Переключатель темы */}
        <Switch checked={darkMode} onChange={toggleDarkMode} color="default" />
        
        {/* Бургер-меню для мобилок */}
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Проекты</MenuItem>
          <MenuItem onClick={handleMenuClose}>Обо мне</MenuItem>
          <MenuItem onClick={handleMenuClose}>Навыки</MenuItem>
          <MenuItem onClick={handleMenuClose}>Контакт</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
