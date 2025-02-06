import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        rotation: 360,
        borderRadius: "100%",
        duration: 2,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <main>
    <h1>GsapFromTo</h1>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.fromTo()</code> используется для анимации элементов из одного нового состояния в другое новое состояние.
    </p>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.fromTo()</code> похож на методы{" "}
      <code>gsap.from()</code> и <code>gsap.to()</code>, но отличие заключается в том, что{" "}
      <code>gsap.fromTo()</code> анимирует элементы из одного нового состояния в другое новое состояние, 
      тогда как <code>gsap.from()</code> анимирует элементы из нового состояния в текущее состояние, 
      а <code>gsap.to()</code> анимирует элементы из текущего состояния в новое состояние.
    </p>
  
    <p className="mt-5 text-gray-500">
      Подробнее о методе{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.fromTo()
      </a>.
    </p>
  
    <div className="mt-20">
      <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
    </div>
  </main>
  
  );
};

export default GsapFromTo;
