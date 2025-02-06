import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  });

  return (
    <main>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        Мы можем использовать такие же методы, как <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> и{" "}
        <code>gsap.timeline()</code> для анимации текста.
      </p>

      <p className="mt-5 text-gray-500 para">
        С их помощью можно добиться различных анимаций и эффектов для текста,
        таких как появление, исчезновение, сдвиг и многое другое.
      </p>

      <p className="mt-5 text-gray-500 para">
        Для более продвинутых анимаций и эффектов текста вы можете изучить GSAP
        TextPlugin или другие сторонние библиотеки, специализирующиеся на
        анимации текста.
      </p>

      <p className="mt-5 text-gray-500 para">
        Подробнее о плагине{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>
        .
      </p>
    </main>
  );
};

export default GsapText;
