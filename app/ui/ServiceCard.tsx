type ServiceCardProps = {
  badge: string;
  title: string;
  price: React.ReactNode;
  description: string;
  examples: string[];
};

export default function ServiceCard({
  badge,
  title,
  price,
  description,
  examples,
}: ServiceCardProps) {
  return (
    <div
      data-reveal="scale"
      className="
        service-card-shine
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-[rgba(246,246,241,0.10)]
        bg-[rgba(246,246,241,0.035)]
        px-[26px]
        py-[30px]
        transition-[transform,box-shadow,border-color]
        duration-[350ms]
        ease-in-out
        hover:-translate-y-[6px]
        hover:border-[rgba(53,214,192,0.4)]
        hover:shadow-[0_30px_70px_-30px_rgba(53,214,192,0.16)]
      "
    >
      <span
        className="
          mb-4
          self-start
          rounded-full
          bg-[rgba(53,214,192,0.08)]
          px-[11px]
          py-[5px]
          text-[0.72rem]
          font-semibold
          text-[]
        "
      >
        {badge}
      </span>

      <h3 className="mb-2 text-[1.18rem] font-medium">{title}</h3>

      <div
        className="
          my-[6px]
          mb-1
          bg-gradient-to-r
          from-[#35D6C0] 
          to-[#29a796]
          bg-clip-text
          font-['Space_Grotesk',sans-serif]
          text-[1.5rem]
          font-semibold
          text-transparent
        "
      >
        {price}
      </div>

      <p className="mb-4 text-[0.92rem] text-[#8FA09C]">{description}</p>

      <div
        className="
          mt-auto
          border-t
          border-[rgba(246,246,241,0.10)]
          pt-4
        "
      >
        <span className="mb-2 block text-[0.72rem] font-semibold text-[#667673]">
          Ejemplos entregados
        </span>

        <ul>
          {examples.map((example) => (
            <li
              key={example}
              className="
                relative
                mb-[6px]
                pl-[14px]
                text-[0.85rem]
                text-[#8FA09C]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-[9px]
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#35D6C0]
                "
              />
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
