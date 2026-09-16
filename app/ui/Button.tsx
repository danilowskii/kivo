import Link from "next/link";
import type { ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};
const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-[15px] text-[0.98rem] font-semibold transition-[all,background,border-color,color,box-shadow] duration-300 hover:-translate-y-[3px]";
const variants = {
  primary:
    "border-0 bg-[#35D6C0] text-[#071010] shadow-[0_12px_40px_-14px_rgba(53,214,192,0.65)] hover:bg-[#8FFFF0] hover:shadow-[0_18px_45px_-14px_rgba(53,214,192,0.75)]",
  ghost:
    "border border-[rgba(246,246,241,0.18)] bg-[rgba(246,246,241,0.035)] text-[#F6F6F1] backdrop-blur-[12px] hover:border-[#35D6C0] hover:bg-[rgba(53,214,192,0.05)] hover:text-[#35D6C0]",
};
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const styles = `${baseStyles} ${variants[variant]} ${className}`;
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={styles}>
          {" "}
          {children}{" "}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {" "}
        {children}{" "}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={styles}>
      {" "}
      {children}{" "}
    </button>
  );
}
