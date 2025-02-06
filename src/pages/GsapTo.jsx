import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "elastic",
      repeat: -1,
      yoyo: true, // will make the animation reverse on every other cycle
    });
  });

  return (
    <main>
    <h1>GsapTo</h1>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.to()</code> используется для анимации элементов из их 
      текущего состояния в новое состояние.
    </p>
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.to()</code> похож на метод{" "}
      <code>gsap.from()</code>, но отличие заключается в том, что{" "}
      <code>gsap.to()</code> анимирует элементы из текущего состояния 
      в новое состояние, в то время как <code>gsap.from()</code> анимирует 
      элементы из нового состояния в текущее состояние.
    </p>
  
    <p className="mt-5 text-gray-500">
      Подробнее о методе{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.to()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.to()
      </a>.
    </p>
  
    <div className="mt-20">
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
    </div>
  </main>
  
  );
};

export default GsapTo;
