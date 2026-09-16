"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 840) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className=" fixed left-0 right-0 top-4 z-[900] flex justify-center max-[700px]:top-2.5 ">
      {" "}
      <div className=" nav-inner relative flex w-[calc(100%-64px)] max-w-[1120px] items-center justify-between rounded-full border border-[rgba(53,214,192,0.16)] bg-[rgba(17,20,20,0.62)] px-[22px] py-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] backdrop-blur-[22px] backdrop-saturate-[125%] max-[700px]:w-[calc(100%-28px)] max-[700px]:px-[15px] max-[700px]:py-2.5 ">
        {" "}
        {/* Logo */}{" "}
        <a
          href="#hero"
          onClick={closeMenu}
          className=" relative z-10 flex items-center gap-[9px] font-['Space_Grotesk',sans-serif] text-[1.35rem] font-bold tracking-[0.08em] text-[#F6F6F1] "
        >
          {" "}
          <span
            aria-hidden="true"
            className=" inline-flex h-7 w-7 text-[#35D6C0] "
          >
            {" "}
            <Image
              src="/k-logo.png"
              width={40}
              height={40}
              alt="Logo Kivo"
            />{" "}
          </span>{" "}
          <span className=" text-[1.08rem] font-semibold tracking-[0.18em] ">
            {" "}
            KIVO{" "}
          </span>{" "}
        </a>{" "}
        {/* Desktop / Mobile Navigation */}{" "}
        <nav
          className={` nav-links flex items-center gap-[30px] max-[840px]:fixed max-[840px]:left-4 max-[840px]:right-4 max-[840px]:top-[76px] max-[840px]:flex-col max-[840px]:items-stretch max-[840px]:gap-0.5 max-[840px]:rounded-[20px] max-[840px]:border max-[840px]:border-[rgba(53,214,192,0.2)] max-[840px]:bg-[rgba(17,20,20,0.94)] max-[840px]:p-3.5 max-[840px]:backdrop-blur-[20px] max-[840px]:origin-top max-[840px]:transition-all max-[840px]:duration-300 max-[840px]:ease-out ${menuOpen ? ` max-[840px]:visible max-[840px]:translate-y-0 max-[840px]:scale-100 max-[840px]:opacity-100 max-[840px]:pointer-events-auto ` : ` max-[840px]:invisible max-[840px]:-translate-y-2 max-[840px]:scale-[0.98] max-[840px]:opacity-0 max-[840px]:pointer-events-none `} `}
        >
          {" "}
          <a
            href="#soluciones"
            onClick={closeMenu}
            className=" text-[0.92rem] font-medium text-[#AAB9B6] transition-colors duration-200 hover:text-[#35D6C0] max-[840px]:rounded-[10px] max-[840px]:px-2.5 max-[840px]:py-3 "
          >
            {" "}
            Soluciones{" "}
          </a>{" "}
          <a
            href="#servicios"
            onClick={closeMenu}
            className=" text-[0.92rem] font-medium text-[#AAB9B6] transition-colors duration-200 hover:text-[#35D6C0] max-[840px]:rounded-[10px] max-[840px]:px-2.5 max-[840px]:py-3 "
          >
            {" "}
            Servicios{" "}
          </a>{" "}
          <a
            href="#casos"
            onClick={closeMenu}
            className=" text-[0.92rem] font-medium text-[#AAB9B6] transition-colors duration-200 hover:text-[#35D6C0] max-[840px]:rounded-[10px] max-[840px]:px-2.5 max-[840px]:py-3 "
          >
            {" "}
            Casos{" "}
          </a>{" "}
          <a
            href="#equipo"
            onClick={closeMenu}
            className=" text-[0.92rem] font-medium text-[#AAB9B6] transition-colors duration-200 hover:text-[#35D6C0] max-[840px]:rounded-[10px] max-[840px]:px-2.5 max-[840px]:py-3 "
          >
            {" "}
            Equipo{" "}
          </a>{" "}
          <Button href="#contacto" onClick={closeMenu} variant="primary">
            {" "}
            Hablemos{" "}
          </Button>{" "}
        </nav>{" "}
        {/* Mobile Toggle */}{" "}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className=" relative z-10 hidden border-0 bg-transparent p-1.5 max-[840px]:block "
        >
          {" "}
          <span
            className={` my-[5px] block h-0.5 w-[22px] rounded-[2px] bg-[#F6F6F1] transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""} `}
          />{" "}
          <span
            className={` my-[5px] block h-0.5 w-[22px] rounded-[2px] bg-[#F6F6F1] transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"} `}
          />{" "}
          <span
            className={` my-[5px] block h-0.5 w-[22px] rounded-[2px] bg-[#F6F6F1] transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""} `}
          />{" "}
        </button>{" "}
      </div>{" "}
    </header>
  );
}
