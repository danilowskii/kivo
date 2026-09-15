"use client";

import "./equipo.css";

export default function Equipo() {
  return (
    <section
      id="equipo"
      className="
        relative
        overflow-hidden
        bg-[#0C2020]
        py-[100px]
      "
    >
      <div className="wrap">
        {/* HEADER */}
        <div
          data-reveal
          className="
            mb-[60px]
            max-w-[760px]
            text-left
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[0.85rem]
              text-[#35D6C0]
            "
          >
            <span aria-hidden="true" className="h-px w-4 bg-[#35D6C0]" />
            El equipo
          </span>

          <h2
            className="
              mt-2
              text-[clamp(2.4rem,4.5vw,4.4rem)]
              leading-none
              tracking-[-0.05em]
            "
          >
            Dos personas, un mismo sistema.
          </h2>

          <p className="mt-4 text-[#91A29E]">
            Marketing y desarrollo trabajando desde el primer boceto, no en
            fases separadas.
          </p>
        </div>

        {/* ORBITAL STAGE */}
        <div
          data-reveal="scale"
          className="
            team-stage
            relative
            flex
            min-h-[600px]
            items-center
            justify-center
          "
        >
          {/* ÓRBITA EXTERNA */}
          <div
            className="
              orbit-ring
              orbit-ring-r1
              absolute
              z-0
              h-[560px]
              w-[560px]
              rounded-full
              border
              border-dashed
              border-[rgba(246,246,241,0.12)]
            "
          >
            <span className="orbit-dot orbit-dot-c1" />
            <span className="orbit-dot orbit-dot-c2" />
          </div>

          {/* ÓRBITA INTERNA */}
          <div
            className="
              orbit-ring
              orbit-ring-r2
              absolute
              z-0
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-dashed
              border-[rgba(246,246,241,0.12)]
            "
          >
            <span className="orbit-dot orbit-dot-c3" />
            <span className="orbit-dot orbit-dot-c4" />
          </div>

          {/* CONNECTION LINES */}
          <svg
            className="
              team-lines
              pointer-events-none
              absolute
              inset-0
              z-[1]
              h-full
              w-full
            "
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="teamLineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#35D6C0" />
                <stop offset="1" stopColor="#29a796" />
              </linearGradient>
            </defs>

            <line className="team-line" x1="50" y1="50" x2="17" y2="15" />

            <line className="team-line" x1="50" y1="50" x2="83" y2="85" />
          </svg>

          {/* CENTER */}
          <div
            className="
              orbit-center
              relative
              z-[2]
              flex
              h-[120px]
              w-[120px]
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#35D6C0]
              to-[#29a796]
              font-['Space_Grotesk',sans-serif]
              text-[1.05rem]
              font-bold
              text-[#fff]
            "
          >
            KIVO
          </div>

          {/* ALINE */}
          <div
            className="
              team-card
              team-card-aline
              glass
              absolute
              z-[3]
              flex
              w-[290px]
              flex-col
              rounded-[20px]
              border
              border-[rgba(246,246,241,0.10)]
              bg-[rgba(17,20,20,1)]
              p-7
              transition-[all,box-shadow]
              duration-[400ms]
              ease-in-out
              hover:-translate-y-[10px]
            "
          >
            <img
              className="
                mb-4
                h-14
                w-14
                rounded-full
                border-2
                border-[rgba(255,255,255,0.7)]
                object-cover
                shadow-[0_8px_20px_-6px_rgba(16,19,28,0.35)]
              "
              src="/casa-acesa.png"
              alt="Aline Chaves"
            />

            <h3 className="mb-[2px] text-[1.14rem] font-semibold">
              Aline Miranda
            </h3>

            <div className="mb-3 text-[0.82rem] font-semibold text-[#35D6C0]">
              Estrategia &amp; Marketing
            </div>

            <p className="text-[0.9rem] text-[#8FA09C]">
              Más de 5 años diseñando contenido y estrategia para marcas, con
              foco en marketplaces y redes sociales. Español fluido.
            </p>

            <div className="mt-[14px] flex flex-wrap gap-[7px]">
              <span className="rounded-full border border-[rgba(246,246,241,0.10)] px-[10px] py-1 text-[0.72rem] text-[#9BAAA6]">
                Estrategia
              </span>

              <span className="rounded-full border border-[rgba(246,246,241,0.10)] px-[10px] py-1 text-[0.72rem] text-[#9BAAA6]">
                Contenido
              </span>

              <span className="rounded-full border border-[rgba(246,246,241,0.10)] px-[10px] py-1 text-[0.72rem] text-[#9BAAA6]">
                Marketplace
              </span>
            </div>
          </div>

          {/* DANILO */}
          <div
            className="
              team-card
              team-card-danilo
              glass
              absolute
              z-[3]
              flex
              w-[290px]
              flex-col
              rounded-[20px]
              border
              border-[rgba(246,246,241,0.10)]
              bg-[rgba(17,20,20,1)]
              p-7
              transition-[all,box-shadow]
              duration-[400ms]
              ease-in-out
              hover:-translate-y-[10px]
            "
          >
            <img
              className="
                mb-4
                h-14
                w-14
                rounded-full
                border-2
                border-[rgba(255,255,255,0.7)]
                object-cover
                shadow-[0_8px_20px_-6px_rgba(16,19,28,0.35)]
              "
              src="/casa-acesa.png"
              alt="Danilo"
            />

            <h3 className="mb-[2px] text-[1.14rem] font-semibold">
              Danilo Paiva
            </h3>

            <div className="mb-3 text-[0.82rem] font-semibold text-[#35D6C0]">
              Desarrollo &amp; Automatización
            </div>

            <p className="text-[0.9rem] text-[#8FA09C]">
              Desarrollo de sistemas, automatizaciones y productos digitales
              conectados con la estrategia del negocio.
            </p>

            <div className="mt-[14px] flex flex-wrap gap-[7px]">
              <span className="rounded-full border border-[rgba(246,246,241,0.10)] px-[10px] py-1 text-[0.72rem] text-[#9BAAA6]">
                Desarrollo
              </span>

              <span className="rounded-full border border-[rgba(246,246,241,0.10)] px-[10px] py-1 text-[0.72rem] text-[#9BAAA6]">
                Automatización
              </span>

              <span className="rounded-full border border-[rgba(246,246,241,0.10)] px-[10px] py-1 text-[0.72rem] text-[#9BAAA6]">
                SaaS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
