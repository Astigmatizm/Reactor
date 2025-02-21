import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material"; // Спиннер MUI

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация асинхронной загрузки (например, API-запрос)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды ожидания
  }, []);

  return (
    <>
      {isLoading ? (
        // Экран загрузки (можно заменить на Skeleton или кастомный Preloader)
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        // Появление страницы после загрузки
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default PageWrapper;
