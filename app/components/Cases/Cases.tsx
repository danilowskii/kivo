"use client";

import { useEffect, useRef } from "react";
import "./cases.css";

const chatSequences = [
  [
    {
      who: "bot",
      text: "¡Hola! ¿Buscas comprar o alquilar?",
    },
    {
      who: "user",
      text: "Comprar, un piso en el centro",
    },
    {
      who: "bot",
      text: "Perfecto. ¿Cuál es tu presupuesto aproximado?",
    },
  ],
  [
    {
      who: "bot",
      text: "¡Hola! ¿Ya tienes la financiación aprobada?",
    },
    {
      who: "user",
      text: "Todavía no, estoy empezando a mirar",
    },
    {
      who: "bot",
      text: "Sin problema. Te paso con un asesor esta misma semana.",
    },
  ],
];

export default function Cases() {
  const chatRef = useRef<HTMLDivElement>(null);
  const savingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mockChat = chatRef.current;
    const savingsEl = savingsRef.current;

    let sequenceIndex = 0;
    let sequenceInterval: ReturnType<typeof setInterval> | undefined;

    if (mockChat) {
      const runSequence = () => {
        const sequence = chatSequences[sequenceIndex];

        mockChat.innerHTML = "";

        sequence.forEach((message, index) => {
          const bubble = document.createElement("div");

          bubble.className = [
            "max-w-[78%]",
            "px-[13px] py-[9px]",
            "rounded-[12px]",
            "text-[0.8rem]",
            "opacity-0",
            "translate-y-2",
            "transition-[opacity,transform]",
            "duration-500",
            "ease-in-out",
            message.who === "bot"
              ? "self-start bg-white/[0.09] text-[#D7DBDA] rounded-bl-[3px]"
              : "self-end bg-gradient-to-r from-[#289183] to-[#18665c] text-white rounded-br-[3px]",
          ].join(" ");

          bubble.textContent = message.text;
          mockChat.appendChild(bubble);

          setTimeout(
            () => {
              bubble.classList.remove("opacity-0", "translate-y-2");
              bubble.classList.add("opacity-100", "translate-y-0");
            },
            250 + index * 750,
          );
        });

        sequenceIndex = (sequenceIndex + 1) % chatSequences.length;
      };

      runSequence();
      sequenceInterval = setInterval(runSequence, 6500);
    }

    let savingsObserver: IntersectionObserver | undefined;

    if (savingsEl) {
      savingsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            let value = 0;
            const target = 128;

            const step = () => {
              value += 4;

              if (value >= target) {
                savingsEl.textContent = `${target}€ /mes`;
                return;
              }

              savingsEl.textContent = `${value}€ /mes`;
              requestAnimationFrame(step);
            };

            step();
            savingsObserver?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.5,
        },
      );

      savingsObserver.observe(savingsEl);
    }

    return () => {
      if (sequenceInterval) {
        clearInterval(sequenceInterval);
      }

      savingsObserver?.disconnect();
    };
  }, []);

  return (
    <section id="casos" className="bg-[#111414] py-[80px]">
      <div className="wrap">
        {/* HEADER */}
        <div data-reveal className="mb-[60px] max-w-[760px] text-left">
          <span
            className="
              relative mb-[18px] inline-flex items-center gap-2
              text-[0.85rem] font-semibold text-[#35D6C0]
              before:block before:h-px before:w-4 before:bg-[#35D6C0]
            "
          >
            Casos reales de aplicación
          </span>

          <h2
            className="
              text-[clamp(2.4rem,4.5vw,4.4rem)]
              leading-none tracking-[-0.05em]
              text-[#F6F6F1]
            "
          >
            Así se ve un problema resuelto.
          </h2>

          <p className="mt-4 text-[#91A29E]">
            Tres ejemplos de sistemas completos: interfaz, automatización y
            datos trabajando juntos.
          </p>
        </div>

        {/* CASE 01 */}
        <div
          data-reveal
          className="
            mb-[26px]
            grid grid-cols-1 overflow-hidden rounded-[26px]
            border border-white/[0.10]
            bg-white/[0.035]
            md:grid-cols-2
          "
        >
          {/* MEDIA */}
          <div
            className="
              relative flex items-center justify-center
              bg-[linear-gradient(150deg,rgba(14,124,102,0.08),rgba(108,92,231,0.10))]
              p-[34px]
            "
          >
            <div
              className="
                w-full max-w-[400px]
                overflow-hidden rounded-[16px]
                bg-[#161D1F]
                shadow-[0_30px_60px_-20px_rgba(20,26,27,0.35)]
              "
            >
              <div className="flex items-center gap-[6px] bg-[#0F1516] px-[14px] py-[10px]">
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
              </div>

              <div className="relative min-h-[210px] overflow-hidden p-5">
                <div
                  className="
                    mb-2 flex items-center justify-between
                    rounded-[10px]
                    bg-white/[0.06]
                    px-3 py-[10px]
                    text-[0.78rem] text-[#D7DBDA]
                  "
                >
                  <span>Lun 14 · 10:00</span>
                  <span>Rehabilitación — María G.</span>
                </div>

                <div
                  className="
                    mb-2 flex items-center justify-between
                    rounded-[10px]
                    bg-white/[0.06]
                    px-3 py-[10px]
                    text-[0.78rem] text-[#D7DBDA]
                  "
                >
                  <span>Lun 14 · 11:30</span>
                  <span>Lesión deportiva — Iker P.</span>
                </div>

                <div
                  className="
                    mb-2 flex items-center justify-between
                    rounded-[10px]
                    bg-white/[0.06]
                    px-3 py-[10px]
                    text-[0.78rem] text-[#D7DBDA]
                  "
                >
                  <span>Mar 15 · 09:00</span>
                  <span>Seguimiento — Laura S.</span>
                </div>

                <div
                  className="
                    absolute left-4 right-4 bottom-[-70px]
                    rounded-[12px]
                    bg-gradient-to-r from-[#289183] to-[#18665c]
                    px-[14px] py-3
                    text-[0.8rem] text-white
                    shadow-[0_10px_24px_-8px_rgba(14,124,102,0.6)]
                    animate-[toast-in_4s_ease-in-out_infinite]
                  "
                >
                  📅 Recordatorio enviado a María G. — cita mañana 10:00
                </div>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div
            className="
              flex flex-col justify-center
              p-[34px_28px]
              md:p-[44px]
            "
          >
            <span className="mb-[10px] block text-[0.78rem] font-semibold text-[#667673]">
              Caso 01
            </span>

            <h3 className="mb-3 text-[1.5rem] leading-tight text-[#F6F6F1]">
              Fisioterapia deportiva — web + agenda con recordatorio
            </h3>

            <p className="mb-4 text-[#AAB9B6]">
              Sitio con página de especialidades (lesiones deportivas,
              rehabilitación) y formulario de reserva. Cada cita se guarda
              automáticamente y el sistema envía un recordatorio 24h antes, más
              un seguimiento posterior sugiriendo la próxima sesión.
            </p>

            <p
              className="
                rounded-[12px]
                border-l-[3px] border-[#35D6C0]
                bg-[#35D6C0]/[0.06]
                px-4 py-[14px]
                text-[0.88rem] text-[#F6F6F1]
              "
            >
              Reduce las faltas a consulta (no-show), uno de los mayores costes
              ocultos de cualquier clínica.
            </p>
          </div>
        </div>

        {/* CASE 02 */}
        <div
          data-reveal
          className="
            mb-[26px]
            grid grid-cols-1 overflow-hidden rounded-[26px]
            border border-white/[0.10]
            bg-white/[0.035]
            md:grid-cols-2
          "
        >
          {/* MEDIA */}
          <div
            className="
              relative flex items-center justify-center
              bg-[linear-gradient(150deg,rgba(14,124,102,0.08),rgba(0, 255, 0, 1))]
              p-[34px]
              md:order-2
            "
          >
            <div
              className="
                w-full max-w-[400px]
                overflow-hidden rounded-[16px]
                bg-[#161D1F]
                shadow-[0_30px_60px_-20px_rgba(20,26,27,0.35)]
              "
            >
              <div className="flex items-center gap-[6px] bg-[#0F1516] px-[14px] py-[10px]">
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
              </div>

              <div className="relative min-h-[210px] overflow-hidden p-5">
                <span
                  className="
                    absolute right-4 top-4
                    rounded-full
                    border border-[#2C3536]
                    px-[9px] py-[3px]
                    text-[0.68rem] text-[#9AA3A2]
                  "
                >
                  🌐 ES · EN · DE
                </span>

                <div ref={chatRef} className="flex flex-col gap-2 pt-[34px]" />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div
            className="
              flex flex-col justify-center
              p-[34px_28px]
              md:p-[44px]
            "
          >
            <span className="mb-[10px] block text-[0.78rem] font-semibold text-[#667673]">
              Caso 02
            </span>

            <h3 className="mb-3 text-[1.5rem] leading-tight text-[#F6F6F1]">
              Inmobiliaria — chatbot de cualificación multilingüe
            </h3>

            <p className="mb-4 text-[#AAB9B6]">
              Un flujo orquestado cualifica cada lead: tipo de propiedad, zona,
              presupuesto y si ya tiene financiación aprobada. Detecta el idioma
              del mensaje y responde en el mismo, algo esencial cuando gran
              parte de los compradores son extranjeros.
            </p>

            <p
              className="
                rounded-[12px]
                border-l-[3px] border-[#35D6C0]
                bg-[#35D6C0]/[0.06]
                px-4 py-[14px]
                text-[0.88rem] text-[#F6F6F1]
              "
            >
              Cada lead llega al agente ya calificado con una puntuación:
              caliente, tibio o frío.
            </p>
          </div>
        </div>

        {/* CASE 03 */}
        <div
          data-reveal
          className="
            mb-[26px]
            grid grid-cols-1 overflow-hidden rounded-[26px]
            border border-white/[0.10]
            bg-white/[0.035]
            md:grid-cols-2
          "
        >
          {/* MEDIA */}
          <div
            className="
              relative flex items-center justify-center
              bg-[linear-gradient(150deg,rgba(14,124,102,0.08),rgba(108,92,231,0.10))]
              p-[34px]
            "
          >
            <div
              className="
                w-full max-w-[400px]
                overflow-hidden rounded-[16px]
                bg-[#161D1F]
                shadow-[0_30px_60px_-20px_rgba(20,26,27,0.35)]
              "
            >
              <div className="flex items-center gap-[6px] bg-[#0F1516] px-[14px] py-[10px]">
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
                <span className="h-2 w-2 rounded-full bg-[#3A4547]" />
              </div>

              <div className="relative min-h-[210px] overflow-hidden p-5">
                <div
                  className="
                    rounded-[10px]
                    bg-[#1F2729]
                    p-4
                    text-[#D7DBDA]
                  "
                >
                  <div className="mb-2 h-[6px] w-[80%] rounded bg-[#31393B]" />
                  <div className="mb-2 h-[6px] w-[60%] rounded bg-[#31393B]" />

                  <div
                    ref={savingsRef}
                    className="
                      my-[14px_4px]
                      text-[1.7rem] font-bold
                      tracking-tight
                      bg-gradient-to-r from-[#35d6c0] to-[#0e3b35]
                      bg-clip-text text-transparent
                    "
                  >
                    0€ /mes
                  </div>

                  <div className="text-[0.72rem] text-[#9AA3A2]">
                    Ahorro estimado · Propuesta generada automáticamente
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div
            className="
              flex flex-col justify-center
              p-[34px_28px]
              md:p-[44px]
            "
          >
            <span className="mb-[10px] block text-[0.78rem] font-semibold text-[#667673]">
              Caso 03
            </span>

            <h3 className="mb-3 text-[1.5rem] leading-tight text-[#F6F6F1]">
              Energía solar — propuestas en PDF generadas al momento
            </h3>

            <p className="mb-4 text-[#AAB9B6]">
              Un formulario recoge los datos del inmueble (consumo medio, tipo
              de tejado, región). El sistema calcula el ahorro proyectado,
              redacta una propuesta persuasiva y genera un PDF con la identidad
              visual del cliente, listo para enviar por correo.
            </p>

            <p
              className="
                rounded-[12px]
                border-l-[3px] border-[#35D6C0]
                bg-[#35D6C0]/[0.06]
                px-4 py-[14px]
                text-[0.88rem] text-[#F6F6F1]
              "
            >
              La energía solar se vende con números: mostrar el ahorro en
              segundos cambia la conversación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
