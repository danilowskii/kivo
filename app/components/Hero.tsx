"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const liquidKRef = useRef<HTMLDivElement | null>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const liquidK = liquidKRef.current;
    const kTurbulence = turbulenceRef.current;

    if (!hero || !liquidK) return;

    let raf = 0;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();

      tx = (e.clientX - rect.left) / rect.width - 0.5;
      ty = (e.clientY - rect.top) / rect.height - 0.5;

      if (!raf) {
        raf = requestAnimationFrame(() => {
          cx += (tx - cx) * 0.12;
          cy += (ty - cy) * 0.12;

          liquidK.style.transform = `
            translateY(-50%)
            translate3d(${cx * 34}px, ${cy * 24}px, 0)
            rotateX(${cy * -5}deg)
            rotateY(${cx * 7}deg)
          `;

          liquidK.style.setProperty("--liquid-x", String(cx));
          liquidK.style.setProperty("--liquid-y", String(cy));

          if (kTurbulence) {
            kTurbulence.setAttribute(
              "baseFrequency",
              `${0.012 + Math.abs(cx) * 0.018} ${0.025 + Math.abs(cy) * 0.022}`,
            );
          }

          raf = 0;
        });
      }
    };

    const handlePointerLeave = () => {
      tx = 0;
      ty = 0;

      liquidK.style.transform = "translateY(-50%) translate3d(0,0,0)";
    };

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);

      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="
        relative grid min-h-[100svh] place-items-center overflow-hidden
        bg-[radial-gradient(circle_at_72%_48%,rgba(53,214,192,.075),transparent_34rem),linear-gradient(180deg,#0B0F0F_0%,#111414_100%)]
        px-14 py-[100px]
        text-left
        max-[900px]:min-h-[900px]
        max-[700px]:flex max-[700px]:items-center
        max-[700px]:min-h-[850px]
        max-[700px]:px-5
        max-[700px]:pb-[100px]
        max-[700px]:pt-[145px]
      "
    >
      {/* KIVO Liquid K */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Aura */}
        <div
          className="
            absolute right-[3%] top-[48%]
            h-[52vw] w-[52vw]
            max-h-[760px] max-w-[760px]
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(53,214,192,.11),rgba(6,59,58,.035)_38%,transparent_68%)]
            blur-[18px]
            max-[700px]:right-[-20%]
            max-[700px]:top-[48%]
            max-[700px]:h-[100vw]
            max-[700px]:w-[100vw]
          "
        />

        <div
          ref={liquidKRef}
          id="liquidK"
          className="
            absolute right-[6vw] top-[78%]
            h-[min(49vw,620px)] w-[min(49vw,620px)]
            -translate-y-1/2
            transition-transform
            duration-[800ms]
            [transition-timing-function:cubic-bezier(.16,1,.3,1)]
            will-change-transform

            max-[1200px]:right-[-5vw]
            max-[1200px]:top-[100%]
            max-[1200px]:h-[58vw]
            max-[1200px]:w-[58vw]

            max-[900px]:right-[-9vw]
            max-[900px]:top-[72%]
            max-[900px]:h-[75vw]
            max-[900px]:w-[75vw]
            max-[900px]:opacity-[.62]

            max-[700px]:right-[-28vw]
            max-[700px]:top-[62%]
            max-[700px]:h-[105vw]
            max-[700px]:w-[105vw]
            max-[700px]:opacity-[.35]
          "
        >
          <Image
            src="/k-logo.png"
            width={800}
            height={800}
            alt="K-Logo reduction"
          />

          {/* Orbit dots */}
          <span
            className="
              absolute right-[20%] top-[19%]
              h-[11px] w-[11px]
              rounded-full
              border border-[rgba(53,214,192,.22)]
              bg-[#35D6C0]
              shadow-[0_0_22px_rgba(53,214,192,.8)]
              animate-kivo-float-orbit
            "
          />

          <span
            className="
              absolute bottom-[24%] right-[11%]
              h-[7px] w-[7px]
              rounded-full
              border border-[rgba(53,214,192,.22)]
              bg-[#9B7FE5]
              shadow-[0_0_18px_rgba(155,127,229,.7)]
              animate-kivo-float-orbit-reverse
            "
          />

          <span
            className="
              absolute bottom-[25%] left-[19%]
              h-[5px] w-[5px]
              rounded-full
              border border-[rgba(53,214,192,.22)]
              bg-[#F6F6F1]
              opacity-70
              animate-kivo-float-orbit-slow
            "
          />
        </div>
      </div>

      {/* Hero copy */}
      <div
        className="
          relative z-[2]
          w-full
          max-w-[1440px]
          translate-x-0
          pr-0
          max-[1200px]:w-[58%]
          max-[1200px]:mr-auto
          max-[900px]:w-full
          max-[900px]:max-w-full
          max-[700px]:translate-x-0
        "
      >
        <h1
          className="
            relative z-[2]
            m-0
            w-full
            max-w-[720px]
            text-balance
            text-[clamp(2.4rem,5.2vw,6.1rem)]
            font-semibold
            leading-[.96]
            tracking-[-.055em]
            text-[#F6F6F1]
            max-[1200px]:max-w-[590px]
            max-[1200px]:text-[clamp(2.7rem,5.4vw,4.7rem)]
            max-[900px]:max-w-[620px]
            max-[900px]:text-[clamp(2.7rem,7vw,5rem)]
            max-[700px]:max-w-[600px]
            max-[700px]:text-[clamp(3rem,14vw,5rem)]
          "
        >
          Tu marca puede hacer más.
          <br />
          Nosotros hacemos que <em className="kivo-hero-em">se note.</em>
        </h1>

        <p
          className="
            relative z-[2]
            mt-[30px]
            max-w-[600px]
            text-[1.08rem]
            leading-[1.7]
            text-[#AAB9B6]
            max-[700px]:max-w-[440px]
            max-[700px]:text-[.96rem]
          "
        >
          Estrategia, creatividad y tecnología para construir marcas que
          avanzan. Sin ruido. Con dirección.
        </p>

        <div
          className="
            relative z-[2]
            mt-[38px]
            flex flex-wrap
            justify-start
            gap-4
          "
        >
          <Button href="#contacto" variant="primary">
            Hablemos de tu marca
            <span className="ml-[9px]">↗</span>
          </Button>

          <Button href="#servicios" variant="ghost">
            Explorar KIVO
            <span className="ml-[9px]">↓</span>
          </Button>
        </div>
      </div>

      {/* Bottom metadata */}
      <div
        className="
          absolute bottom-[34px] z-[3]
          flex items-center gap-[14px]
          text-[.62rem]
          tracking-[.18em]
          text-[#53635F]
          left-[34px]
          max-[700px]:hidden
        "
      >
        <span className="text-[#35D6C0]">01</span>
        <span>IDEA → DIRECCIÓN → IMPACTO</span>
      </div>

      <div
        className="
          absolute right-[34px] bottom-[34px] z-[3]
          flex items-center gap-[14px]
          text-[.62rem]
          tracking-[.18em]
          text-[#53635F]
          max-[700px]:hidden
        "
      >
        <span className="text-[#35D6C0]">ES</span>
        <span>2026</span>
      </div>
    </section>
  );
}
