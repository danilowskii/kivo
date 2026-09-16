"use client";

import "./contacto.css";
import { useEffect } from "react";
import Button from "@/app/ui/Button";

export default function Contacto() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      className="
        bg-[#111414]
        pb-[100px]
        pt-[150px]
        text-center
      "
    >
      <div className="wrap">
        <div
          data-reveal="scale"
          className="
            contact-box-wrap
            relative
            mx-auto
            max-w-[680px]
            overflow-hidden
            rounded-[28px]
          "
        >
          {/* CONTACT BOX */}
          <div
            className="
              glass
              relative
              rounded-[28px]
              border
              border-[rgba(53,214,192,0.16)]
              bg-[rgba(246,246,241,0.035)]
              px-[46px]
              py-[60px]
            "
          >
            <h2
              className="
                text-[clamp(2.2rem,4vw,4rem)]
                leading-[1]
                tracking-[-0.05em]
              "
            >
              Cuéntanos qué problema quieres resolver.
            </h2>

            <p
              className="
                mx-auto
                mb-[34px]
                mt-[18px]
                max-w-[440px]
                text-[#91A29E]
              "
            >
              Respondemos con una propuesta concreta: qué construir, en cuánto
              tiempo y a qué precio.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              {/* PRIMARY BUTTON */}
              <Button href="mailto:hola@kivo.agency" variant="primary">
                Escribir a kivoagencia.es@gmail.com
              </Button>

              {/* GHOST BUTTON */}
              <Button href="#servicios" variant="ghost">
                Ver paquetes de nuevo
              </Button>
            </div>
          </div>

          {/* LEFT DOOR */}
          <div
            className="
              contact-door
              contact-door-left
              absolute
              bottom-0
              left-0
              top-0
              z-[5]
              flex
              w-[52%]
              items-center
              justify-center
              rounded-l-[28px]
              border
              border-[rgba(53,214,192,0.15)]
              bg-gradient-to-br
              from-[#063B3A]
              to-[#081010]
            "
          >
            <span
              className="
                relative
                font-['Space_Grotesk',sans-serif]
                text-[1.4rem]
                font-bold
                tracking-[0.02em]
                text-[rgba(255,255,255,0.5)]
              "
            >
              KI
            </span>
          </div>

          {/* RIGHT DOOR */}
          <div
            className="
              contact-door
              contact-door-right
              absolute
              bottom-0
              right-0
              top-0
              z-[5]
              flex
              w-[52%]
              items-center
              justify-center
              rounded-r-[28px]
              border
              border-[rgba(53,214,192,0.15)]
              bg-gradient-to-br
              from-[#063B3A]
              to-[#081010]
            "
          >
            <span
              className="
                relative
                font-['Space_Grotesk',sans-serif]
                text-[1.4rem]
                font-bold
                tracking-[0.02em]
                text-[rgba(255,255,255,0.5)]
              "
            >
              VO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
