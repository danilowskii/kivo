"use client";

import PainCard from "../ui/PainCard";

export default function AntesDespues() {
  return (
    <section
      id="dolores"
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-[#021413]
        via-[#064746]
        to-[#032022]
        py-[100px]
        max-[900px]:py-[110px]
      "
    >
      <div className="relative z-[1] mx-auto max-w-[1180px] px-8">
        {/* Header */}
        <div
          data-reveal
          className="
            mb-[70px]
            max-w-[800px]
            text-left
            max-[900px]:mb-12
          "
        >
          <div
            className="
              mb-5
              text-[0.67rem]
              uppercase
              tracking-[0.22em]
              text-[#35D6C0]
            "
          >
            02 / EL CAMBIO
          </div>

          <h2
            className="
              m-0
              font-['Space_Grotesk',sans-serif]
              text-[clamp(2.7rem,5vw,5.3rem)]
              font-semibold
              leading-[0.98]
              tracking-[-0.05em]
              text-[#F6F6F1]
            "
          >
            No maquillamos problemas.
            <br />
            <em
              className="
                font-['DM_Serif_Display',Georgia,serif]
                font-normal
                italic
                text-[#35D6C0]
              "
            >
              Los transformamos.
            </em>
          </h2>

          <p
            className="
              mt-[22px]
              max-w-[600px]
              font-['Space_Grotesk',sans-serif]
              text-[1rem]
              leading-normal
              text-[rgba(255,255,255,0.68)]
            "
          >
            Desliza el cursor sobre cada situación. El problema se convierte en
            una dirección clara.
          </p>
        </div>

        {/* Transformation Cards */}

        {/* Card 01 */}
        <div className="grid grid-cols-1 gap-[14px] min-[901px]:grid-cols-2">
          <PainCard
            number="01"
            state="FRICCIÓN"
            before="Pierdes citas por no-shows y llamadas sin responder."
            after="Recordatorios automáticos y confirmación de agenda, sin gestión manual."
          />

          <PainCard
            number="02"
            state="PÉRDIDA"
            before="Tu web recibe visitas pero casi nadie compra o pregunta."
            after="Diseñamos cada página pensando en la conversión, no solo en cómo se ve."
          />

          <PainCard
            number="03"
            state="RUIDO"
            before="Contestas los mismos mensajes de WhatsApp cien veces al día."
            after="Un chatbot cualifica y responde en segundos, incluso en varios idiomas."
          />

          <PainCard
            number="04"
            state="INCERTIDUMBRE"
            before="No sabes cuánto te cuesta realmente conseguir un cliente nuevo."
            after="Estrategia con datos claros y objetivos medibles, mes a mes."
          />
        </div>

        {/* Footer */}
        <div
          className="
            mt-7
            flex
            items-center
            gap-[13px]
            text-[0.63rem]
            tracking-[0.2em]
            text-[#657571]
          "
        >
          <span className="h-px flex-1 bg-[rgba(246,246,241,0.08)]" />

          <span>PROBLEMA</span>

          <b className="font-medium text-[#35D6C0]">→</b>

          <span>DIRECCIÓN</span>

          <b className="font-medium text-[#35D6C0]">→</b>

          <span>IMPACTO</span>

          <span className="h-px flex-1 bg-[rgba(246,246,241,0.08)]" />
        </div>
      </div>
    </section>
  );
}
