import React from "react";
import Section from "./Section";
import "../styles/Reactor.css";
import redFace from "../assets/red.jpg";

const Reactor = () => {
  return (
//     <div className="reactor-container">
//       <div className="reactor">
//         <img src={redFace} alt="Red Reactor" className="reactor-photo" />
//       </div>
//         <Section title="Обо мне" position="top" link="/about" className="about" />
//         <Section title="Проекты" position="right" link="/projects" className="projects"/>
//         <Section title="Контакты" position="bottom" link="/contacts" className="contacts"/>
//         <Section title="О портфолио" position="left" link="/portfolio" className=""/>
//     </div>
//   );
// };

  // <div className="relative w-screen h-screen bg-gray-900 flex items-center justify-center">
  //   {/* Центральное фото */}
  //   <div className="absolute w-40 h-40 bg-red-600 rounded-full flex items-center justify-center z-10">
  //     <img
  //       src={redFace}
  //       alt="Фото"
  //       className="w-full h-full object-cover rounded-full"
  //     />
  //   </div>

  //   {/* Секции */}
  //   <div className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] flex items-center justify-center">
  //     {/* Верхняя секция */}
  //     <div className="absolute top-0 w-1/2 h-1/2 bg-gray-700 clip-section-top"><Section title="Обо мне" position="top" link="/about" className="about" />
  //        <Section title="Проекты" position="right" link="/projects" className="projects"/>
  //     {/* Правая секция */}
  //     <div className="absolute right-0 w-1/2 h-1/2 bg-gray-700 clip-section-right"><Section title="Контакты" position="bottom" link="/contacts" className="contacts"/></div>
  //     {/* Нижняя секция */}
  //     <div className="absolute bottom-0 w-1/2 h-1/2 bg-gray-700 clip-section-bottom"><Section title="О портфолио" position="left" link="/portfolio" className=""/></div>
  //     {/* Левая секция */}
  //     <div className="absolute left-0 w-1/2 h-1/2 bg-gray-700 clip-section-left"></div>
  //   </div>

  //   <style jsx>{`
  //     .clip-section-top {
  //       clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  //     }
  //     .clip-section-right {
  //       clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  //       transform: rotate(90deg);
  //     }
  //     .clip-section-bottom {
  //       clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  //       transform: rotate(180deg);
  //     }
  //     .clip-section-left {
  //       clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  //       transform: rotate(270deg);
  //     }
  //   `}</style>
  // </div>







    <div className="portfolio-container">
      <div className="center-photo">
        <img src="your-photo.jpg" alt="Фото" />
      </div>
      <div className="section top">Обо мне</div>
      <div className="section right">Проекты</div>
      <div className="section bottom">Контакты</div>
      <div className="section left">О портфолио</div>
    </div>
  );
};





export default Reactor;
