import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(
      ".stagger-box",
      {
        y: 250,
        rotation: 360,
        borderRadius: "100%",
        ease: "power3.inOut",
        repeat: -1,
        yoyo: true,
        // stagger: 0.5,
        stagger: {
          amount: 1.5, // the amount of time to stagger the animations between each element
          grid: [2, 1], // the number of columns and rows in the grid
          axis: "y", // the axis along which to stagger the animations
          ease: "circ.inOut",
          from: "center", // the starting position of the staggered animations
        },
      },
      0.5
    );
  });

  return (
    <main>
    <h1>GsapStagger</h1>
  
    <p className="mt-5 text-gray-500">
      GSAP Stagger — это функция, которая позволяет применять анимации с задержкой по порядку для группы элементов.
    </p>
  
    <p className="mt-5 text-gray-500">
      Используя функцию Stagger в GSAP, вы можете указать время задержки между анимациями каждого элемента, 
      а также настроить easing и продолжительность каждой отдельной анимации. Это позволяет создавать динамичные и визуально привлекательные эффекты, 
      такие как последовательные появления, вращения, перемещения и многое другое.
    </p>
  
    <p className="mt-5 text-gray-500">
      Подробнее о функции{" "}
      <a
        href="https://gsap.com/resources/getting-started/Staggers"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        Gsap Stagger
      </a>.
    </p>
  
    <div className="mt-20">
      <div className="flex gap-5">
        <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
      </div>
    </div>
  </main>
  
  );
};

export default GsapStagger;
