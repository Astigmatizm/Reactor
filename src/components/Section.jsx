import React from "react";
import { motion } from "framer-motion";
import "../styles/Section.css";

const positions = {
  top: { x: "-50%", y: "-200%" },
  right: { x: "200%", y: "-50%" },
  bottom: { x: "-50%", y: "200%" },
  left: { x: "-200%", y: "-50%" },
};

const Section = ({ title, position }) => {
    const positions = {
      top: { x: "-50%", y: "-200%" },
      right: { x: "200%", y: "-50%" },
      bottom: { x: "-50%", y: "200%" },
      left: { x: "-200%", y: "-50%" },
    };
  
    console.log("📌 Position:", position);
    console.log("📌 Positions Object:", positions);
    console.log("📌 positions[position]:", positions[position]);
  
    if (!positions[position]) {
      console.error("❌ Ошибка: позиция не найдена!", position);
      return null; // Не рендерим компонент, если позиция неправильная
    }
  
    return (
      <motion.div
        className={`section ${position}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: positions[position].x,
          translateY: positions[position].y,
        }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.div>
    );
  };
  

export default Section;
