"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ComoTrabajamos() {
  const solarStageRef = useRef<HTMLDivElement>(null);
  const solarPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const solarPanel = solarPanelRef.current;
    const solarStage = solarStageRef.current;

    if (!solarPanel || !solarStage) return;

    const handleMouseEnter = () => {
      solarStage.classList.add("lit");
    };

    const handleMouseLeave = () => {
      solarStage.classList.remove("lit");
    };

    const handleTouchStart = () => {
      solarStage.classList.toggle("lit");
    };

    solarPanel.addEventListener("mouseenter", handleMouseEnter);
    solarPanel.addEventListener("mouseleave", handleMouseLeave);
    solarPanel.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    return () => {
      solarPanel.removeEventListener("mouseenter", handleMouseEnter);
      solarPanel.removeEventListener("mouseleave", handleMouseLeave);
      solarPanel.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-[#111414] py-[150px] pb-[130px]"
    >
      <div
        className="
          mx-auto grid max-w-[1180px] grid-cols-[0.85fr_1.15fr]
          items-center gap-[70px] px-8
          max-[900px]:grid-cols-1
          max-[900px]:gap-10
        "
      >
        <div data-reveal>
          <span
            className="
              mb-[18px] inline-flex items-center gap-2
              text-[0.85rem] font-semibold text-[#35D6C0]
              before:h-px before:w-4 before:bg-[#35D6C0]
            "
          >
            Cómo trabajamos
          </span>

          <h2
            className="
              m-0 max-w-[460px]
              font-['Space_Grotesk',sans-serif]
              text-[clamp(2.3rem,4vw,4rem)]
              font-semibold leading-[1.15]
              tracking-[-0.04em]
              text-[#F6F6F1]
            "
          >
            Cada proyecto es un sistema que se enciende cuando funciona.
          </h2>

          <p
            className="
              mt-5 max-w-[420px]
              font-['Space_Grotesk',sans-serif]
              text-[1.02rem]
              text-[#91A29E]
              max-[900px]:max-w-full
            "
          >
            Una web, una automatización o una app solo valen si mueven algo real
            en el negocio. Pasa el cursor por el panel y mira qué pasa dentro de
            la casa.
          </p>

          <div
            className="
              mt-[26px] inline-flex items-center gap-2.5
              text-[0.86rem] text-[#667673]
            "
          >
            <p className="solar-instruction">
              <span className="solar-lightning" aria-hidden="true">
                ⚡
              </span>
              <span
                className="solar-instruction-text"
                data-text="Pasa el cursor sobre el panel solar"
              >
                Pasa el cursor sobre el panel solar
              </span>
            </p>
          </div>
        </div>

        <div
          ref={solarStageRef}
          className="
            solar-stage
            relative mx-auto w-full max-w-[460px]
            overflow-hidden rounded-[22px]
            border border-[rgba(53,214,192,0.18)]
            bg-[rgba(246,246,241,0.04)]
            shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]
            min-[901px]:max-w-[600px]
  "
        >
          <div
            ref={solarPanelRef}
            className="solar-panel relative cursor-pointer leading-[0]"
          >
            {/* Imagem normal */}
            <img
              src="/casa-apagada.png"
              alt="Painel solar em tejado"
              className="block w-full"
            />

            {/* Imagem iluminada */}
            <img
              src="/casa-acesa.png"
              alt="Painel solar em tejado iluminado"
              className="
                solar-lit
                pointer-events-none absolute inset-0
                block h-full w-full object-cover
                opacity-0 transition-opacity duration-500
                "
            />

            {/* Brilho */}
            <div
              className="
                solar-glow
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_50%_35%,rgba(53,214,192,0.25),transparent_68%)]
                opacity-0 mix-blend-screen transition-opacity duration-700
                 "
            />

            {/* Área clicável/hover somente sobre os painéis */}
            <div
              className="
                solar-hit
                absolute inset-0
                cursor-pointer
                "
            />

            <span
              className="
                pointer-events-none absolute right-4 top-[14px]
                text-[1.1rem]
                drop-shadow-[0_0_6px_rgba(255,209,102,0.9)]
                animate-[solar-pulse_2.2s_infinite]
                "
            >
              ☀
            </span>
          </div>

          <div className="solar-house-strip bg-[#071010] px-5 pb-5 pt-0">
            <svg
              id="solarSvg"
              viewBox="0 0 400 100"
              xmlns="http://www.w3.org/2000/svg"
              className="block w-full"
            >
              {/* Fluxo de energia vindo do painel */}
              <path className="spark" d="M80 0 L80 38" />
              <path className="spark" d="M200 0 L200 38" />
              <path className="spark" d="M320 0 L320 38" />

              {/* Brilho das lâmpadas */}
              <circle className="bulb-glow" cx="80" cy="64" r="32" />
              <circle className="bulb-glow" cx="200" cy="64" r="32" />
              <circle className="bulb-glow" cx="320" cy="64" r="32" />

              {/* Janelas */}
              <rect
                className="window"
                x="55"
                y="40"
                width="50"
                height="46"
                rx="5"
              />

              <rect
                className="window"
                x="175"
                y="40"
                width="50"
                height="46"
                rx="5"
              />

              <rect
                className="window"
                x="295"
                y="40"
                width="50"
                height="46"
                rx="5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
