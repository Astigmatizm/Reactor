import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section"; // Импортируем общий компонент для секций
import "../styles/Reactor.css"; // Подключаем стили
import redFace from "../assets/red.jpg"; 

const Reactor = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления анимацией
//   console.log("Рендерим секции:");
//   console.log({ title: "Обо мне", position: "top" });
//   console.log({ title: "Проекты", position: "right" });
//   console.log({ title: "Контакты", position: "bottom" });
//   console.log({ title: "О портфолио", position: "left" });
  

  return (
    <div className="reactor-container">
        <div className="reactor">
            <img src={redFace} alt="Red Reactor" className="reactor-photo" />
            <Section title="Обо мне" position="top" />
            <Section title="Проекты" position="right" />
            <Section title="Контакты" position="bottom" />
            <Section title="О портфолио" position="left" />
        </div>
</div>


  );
};

export default Reactor;
