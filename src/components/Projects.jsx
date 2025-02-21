import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeOut" }} // Задержка появления
    >
      <Box
        sx={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#121212",
          marginTop: "102px",
        // boxShadow: "inset 0 0 20px rgba(255, 0, 255, 0.5)", // Внутренний неоновый свет
        }}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Мои проекты
        </Typography>
        {/* Здесь можно добавить карточки проектов */}
      </Box>
    </motion.div>
  );
};

export default Projects;
