import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTimeline = () => {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  });

  return (
    <main>
    <h1>GsapTimeline</h1>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.timeline()</code> используется для создания экземпляра временной шкалы, который позволяет управлять несколькими анимациями.
    </p>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.timeline()</code> похож на методы{" "}
      <code>gsap.to()</code>, <code>gsap.from()</code> и{" "}
      <code>gsap.fromTo()</code>, но отличие заключается в том, что{" "}
      <code>gsap.timeline()</code> используется для создания временной шкалы, которая позволяет управлять несколькими анимациями. 
      В то время как <code>gsap.to()</code>, <code>gsap.from()</code> и <code>gsap.fromTo()</code> 
      применяются для анимации элементов из их текущего состояния в новое, из нового состояния в текущее и из одного нового состояния в другое новое состояние соответственно.
    </p>
  
    <p className="mt-5 text-gray-500">
      Подробнее о методе{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.timeline()
      </a>.
    </p>
  
    <div className="mt-20 space-y-10">
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Воспроизвести/Пауза
      </button>
  
      <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
    </div>
  </main>
  
  );
};

export default GsapTimeline;
