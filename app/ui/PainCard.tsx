type PainCardProps = {
  number: string;
  state: string;
  before: string;
  after: string;
};

export default function PainCard({
  number,
  state,
  before,
  after,
}: PainCardProps) {
  return (
    <div
      data-reveal="scale"
      className="
        group relative min-h-[260px] overflow-hidden
        border border-white/[0.10]
        bg-[linear-gradient(145deg,rgba(246,246,241,.075),rgba(246,246,241,.018))]
        p-[24px_25px] rounded-2xl
        transition-[border-color,transform,background] duration-[450ms] 
        hover:-translate-y-[10px] transition-all ease-in-out
        hover:border-[#35D6C0]/[0.45]
        hover:bg-[linear-gradient(145deg,rgba(53,214,192,.07),rgba(246,246,241,.025))]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none absolute
          -bottom-[126px] left-[25%]
          h-[180px] w-[130%]
          rounded-full
          bg-[radial-gradient(circle,rgba(53,214,192,.18),transparent_65%)]
          opacity-0 blur-[25px]
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Top */}
      <div
        className="
          relative z-10
          flex justify-between
          text-[.63rem]
          tracking-[.18em]
          text-[#50615D]
          group-hover:text-[#35D6C0]
        "
      >
        <span>{number}</span>

        <span className="text-[#667A75] group-hover:text-[#35D6C0]">
          {state}
        </span>
      </div>

      {/* Antes */}
      <div
        className="
          relative z-10
          mt-[46px]
          grid grid-cols-[42px_1fr]
          items-start gap-4
          translate-y-[20px]
          group-hover:translate-y-[-20px]
          transition-all ease-in duration-250
        "
      >
        <span
          className="
            grid h-[38px] w-[38px]
            place-items-center
            rounded-full
            border border-white/[0.12]
            text-[1.15rem]
            text-[#6A7976]
          "
        >
          ×
        </span>

        <div>
          <small
            className="
              text-[1rem]
              tracking-[0.08em]
              text-[#b2c4bf]
              group-hover:text-[#b1b4b3]
            "
          >
            ANTES
          </small>

          <p
            className="
              mt-[7px]
              text-[.98rem]
              leading-[1.5]
              text-[#C4CECB]
            "
          >
            {before}
          </p>
        </div>
      </div>

      {/* Depois */}
      <div
        className="
          absolute
          
          bottom-[24px]
          left-[25px]
          right-[25px]
          grid grid-cols-[42px_1fr]
          items-start gap-4
          translate-y-[30px]
          opacity-[0]
          transition-[transform,opacity]
          duration-500
          ease-[cubic-bezier(.2,.8,.2,1)]
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {/* Linha */}
        <div
          className="
            absolute
            left-[19px]
            top-[-38px]
            h-[24px]
            w-px
            bg-gradient-to-b
            from-[#35D6C0]
            to-transparent
          "
        />

        <span
          className="
            relative z-10
            grid h-[38px] w-[38px]
            place-items-center
            rounded-full
            border
            border-[#35D6C0]/[0.45]
            text-[1.15rem]
            text-[#35D6C0]
            shadow-[0_0_25px_rgba(53,214,192,.13)]
          "
        >
          ↗
        </span>

        <div>
          <small
            className="
              text-[1rem]
              tracking-[0.08em]
              text-[#667571]
              group-hover:text-[#35D6C0]
            "
          >
            DESPUÉS
          </small>

          <p
            className="
              mt-[7px]
              text-[.98rem]
              leading-[1.5]
              text-[#F6F6F1]
            "
          >
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}
