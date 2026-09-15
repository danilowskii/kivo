"use client";

import { useEffect, useRef, useState } from "react";
import "./elsistema.css";

const CUBE_COLORS = [
  "#FFD500",
  "#0046AD",
  "#009B48",
  "#B71234",
  "#FF5800",
  "#FFFFFF",
];

const FACES = [
  {
    side: "front",
    label: "Marketing",
  },
  {
    side: "back",
    label: "Branding",
  },
  {
    side: "right",
    label: "Automatización",
  },
  {
    side: "left",
    label: "SaaS & Apps",
  },
  {
    side: "top",
    label: "Redes Sociales",
  },
  {
    side: "bottom",
    label: "Anuncios",
  },
];

function generateInitialColors(faceIndex: number) {
  return Array.from({ length: 9 }, (_, index) => {
    return CUBE_COLORS[(index * 2 + faceIndex * 3) % CUBE_COLORS.length];
  });
}

function generateRandomColors() {
  return Array.from({ length: 9 }, () => {
    return CUBE_COLORS[Math.floor(Math.random() * CUBE_COLORS.length)];
  });
}

function getFaceTransform(side: string) {
  switch (side) {
    case "front":
      return "[transform:translateZ(115px)]";

    case "back":
      return "[transform:rotateY(180deg)_translateZ(115px)]";

    case "right":
      return "[transform:rotateY(90deg)_translateZ(115px)]";

    case "left":
      return "[transform:rotateY(-90deg)_translateZ(115px)]";

    case "top":
      return "[transform:rotateX(90deg)_translateZ(115px)]";

    case "bottom":
      return "[transform:rotateX(-90deg)_translateZ(115px)]";

    default:
      return "";
  }
}

export default function ElSistema() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const cubeStageRef = useRef<HTMLDivElement>(null);

  const [isSolved, setIsSolved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [faceColors, setFaceColors] = useState<string[][]>(() =>
    FACES.map((_, faceIndex) => generateInitialColors(faceIndex)),
  );

  useEffect(() => {
    const cube = cubeRef.current;
    const cubeStage = cubeStageRef.current;

    if (!cube || !cubeStage) return;

    let animationFrame = 0;

    let baseAngle = 0;

    let targetTiltX = 0;
    let targetTiltY = 0;

    let currentTiltX = 0;
    let currentTiltY = 0;

    let hovering = false;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = cubeStage.getBoundingClientRect();

      const mouseX = (event.clientX - rect.left) / rect.width - 0.5;

      const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

      targetTiltY = mouseX * 42;
      targetTiltX = -mouseY * 42;
    };

    const handleMouseEnter = () => {
      hovering = true;
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      hovering = false;

      setIsHovering(false);

      targetTiltX = 0;
      targetTiltY = 0;
    };

    const animateCube = () => {
      baseAngle += hovering ? 0.025 : 0.075;

      currentTiltX += (targetTiltX - currentTiltX) * 0.07;

      currentTiltY += (targetTiltY - currentTiltY) * 0.07;

      cube.style.transform = `
        rotateX(${-18 + currentTiltX}deg)
        rotateY(${baseAngle + currentTiltY}deg)
      `;

      animationFrame = requestAnimationFrame(animateCube);
    };

    cubeStage.addEventListener("mousemove", handleMouseMove);

    cubeStage.addEventListener("mouseenter", handleMouseEnter);

    cubeStage.addEventListener("mouseleave", handleMouseLeave);

    animateCube();

    return () => {
      cancelAnimationFrame(animationFrame);

      cubeStage.removeEventListener("mousemove", handleMouseMove);

      cubeStage.removeEventListener("mouseenter", handleMouseEnter);

      cubeStage.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSolve = () => {
    const nextSolved = !isSolved;

    setIsSolved(nextSolved);

    if (nextSolved) {
      setFaceColors(
        FACES.map((_, faceIndex) =>
          Array.from(
            { length: 9 },
            () => CUBE_COLORS[faceIndex % CUBE_COLORS.length],
          ),
        ),
      );
    } else {
      setFaceColors(FACES.map(() => generateRandomColors()));
    }
  };

  return (
    <section
      id="conexion"
      className="
        overflow-hidden
        bg-[#111414]
        py-[150px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-[calc(100%-64px)]
          max-w-[1120px]
          items-center
          gap-[80px]
          min-[901px]:grid-cols-2
          max-[900px]:gap-[36px]
          max-[900px]:text-center
        "
      >
        {/* CUBE STAGE */}
        <div
          ref={cubeStageRef}
          data-reveal="scale"
          className="
            relative
            flex
            min-h-[520px]
            items-center
            justify-center
            [perspective:1400px]
          "
        >
          {/* Orbit label */}
          <div
            className="
              absolute
              left-[8%]
              top-[4%]
              text-[.62rem]
              tracking-[.2em]
              text-[#61716D]
            "
          >
            KIVO SYSTEM
            <span className="ml-[10px] text-[#35D6C0]">INTERACTIVE</span>
          </div>

          {/* Cube */}
          <div
            ref={cubeRef}
            id="magicCube"
            aria-label="Cubo interactivo KIVO"
            className={`
                relative
                h-[230px]
                w-[230px]
                cursor-pointer
                [transform-style:preserve-3d]
                ${isHovering ? "is-lit" : ""}
                `}
          >
            {FACES.map((face, faceIndex) => (
              <div
                key={face.side}
                className={`
                  absolute
                  flex
                  h-[230px]
                  w-[230px]
                  items-end
                  justify-center
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[0.13]
                  bg-[#101817]
                  text-center
                  shadow-[inset_0_0_0_1px_rgba(255,255,255,.04),0_25px_60px_-35px_#000]
                  [backface-visibility:visible]
                  ${getFaceTransform(face.side)}
                `}
              >
                {/* 3 × 3 */}
                <div
                  className="
                    absolute
                    inset-0
                    grid
                    grid-cols-3
                    grid-rows-3
                    gap-[4px]
                    p-[11px]
                  "
                >
                  {faceColors[faceIndex].map((color, cellIndex) => (
                    <span
                      key={cellIndex}
                      className="
                          rounded-[7px]
                          shadow-[inset_0_0_0_1px_rgba(0,0,0,.10)]
                          transition-[transform,background-color,filter]
                          duration-[550ms]
                          ease-in-out
                        "
                      style={{
                        backgroundColor: color,
                        transform: isHovering ? "scale(0.92)" : "scale(1)",
                        filter: isSolved
                          ? "saturate(1.18) brightness(1.06)"
                          : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Shine */}
                <div
                  className="
                    cube-face-shine
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]
                    opacity-0
                    transition-opacity
                    duration-300
                  "
                />

                {/* Face label */}
                <span
                  className="
                    relative
                    z-[3]
                    w-full
                    bg-[rgba(7,16,16,.66)]
                    px-[11px]
                    py-[11px]
                    text-[.78rem]
                    tracking-[.08em]
                    text-[#F6F6F1]
                    backdrop-blur-[8px]
                  "
                >
                  {face.label}
                </span>
              </div>
            ))}
          </div>

          {/* Solve button */}
          <button
            id="cubeSolve"
            type="button"
            onClick={handleSolve}
            className="
              absolute
              bottom-[5%]
              left-1/2
              z-[5]
              -translate-x-1/2
              rounded-full
              border
              border-[#35D6C0]/[0.35]
              bg-[#35D6C0]/[0.06]
              px-[17px]
              py-[10px]
              font-['Space_Grotesk']
              text-[.72rem]
              font-medium
              tracking-[.08em]
              text-[#35D6C0]
              transition-all
              duration-300
              hover:-translate-x-1/2
              hover:-translate-y-[3px]
              hover:bg-[#35D6C0]
              hover:text-[#071010]
              hover:shadow-[0_15px_35px_-15px_rgba(53,214,192,.65)]
              cursor-pointer
            "
          >
            <span className="mr-[7px]">{isSolved ? "↻" : "✦"}</span>

            {isSolved ? "Mezclar de nuevo" : "Resolver sistema"}
          </button>
        </div>

        {/* TEXT */}
        <div
          data-reveal
          className="
            min-w-0
            text-left
            max-[900px]:text-center
          "
        >
          {/* Section index */}
          <div
            className="
              mb-[20px]
              text-[.67rem]
              uppercase
              tracking-[.22em]
              text-[#35D6C0]
            "
          >
            03 / EL SISTEMA
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[510px]
              text-[clamp(2.4rem,4.5vw,4.5rem)]
              leading-[.98]
              tracking-[-.05em]
              text-[#F6F6F1]
              max-[900px]:mx-auto
            "
          >
            Todo encaja.
            <br />
            <em
              className="
                font-['DM_Serif_Display']
                font-normal
                italic
                text-[#35D6C0]
              "
            >
              Cuando hay dirección.
            </em>
          </h2>

          {/* Description */}
          <p
            className="
              mt-[24px]
              max-w-[510px]
              text-[#91A29E]
              max-[900px]:mx-auto
            "
          >
            Marketing, branding, desarrollo y automatización no funcionan por
            separado. Los conectamos para que cada pieza haga más fuerte a la
            siguiente.
          </p>

          {/* Status */}
          <div
            className={`
              mt-[30px]
              flex
              items-center
              gap-[10px]
              text-[.72rem]
              uppercase
              tracking-[.1em]
              max-[900px]:justify-center
              ${isSolved ? "text-[#35D6C0]" : "text-[#667874]"}
            `}
          >
            <span
              className="
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#35D6C0]
                shadow-[0_0_14px_#35D6C0]
              "
            />

            {isSolved
              ? "Sistema alineado · impacto kivo"
              : "Sistema desalineado · sin kivo"}
          </div>

          {/* Legend */}
          <div
            className="
              mt-[30px]
              flex
              flex-wrap
              gap-[10px]
              max-[900px]:justify-center
            "
          >
            {[
              "Marketing",
              "Branding",
              "Automatización",
              "SaaS & Apps",
              "Redes Sociales",
              "Anuncios",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-white/[0.11]
                  bg-white/[0.025]
                  px-[13px]
                  py-[7px]
                  text-[.82rem]
                  text-[#A8B5B2]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
