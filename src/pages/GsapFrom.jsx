import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <main>
    <h1>GsapFrom</h1>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.from()</code> используется для анимации элементов из нового состояния в их текущее состояние.
    </p>
  
    <p className="mt-5 text-gray-500">
      Метод <code>gsap.from()</code> похож на метод{" "}
      <code>gsap.to()</code>, но отличие заключается в том, что{" "}
      <code>gsap.from()</code> анимирует элементы из нового состояния в текущее состояние, 
      тогда как <code>gsap.to()</code> анимирует элементы из текущего состояния в новое состояние.
    </p>
  
    <p className="mt-5 text-gray-500">
      Подробнее о методе{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.from()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.from()
      </a>.
    </p>
  
    <div className="mt-20">
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
    </div>
  </main>
  
  );
};

export default GsapFrom;
