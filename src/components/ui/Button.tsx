"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "gold";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-secondary text-white shadow-button hover:bg-blue-gradient hover:shadow-hover",
  secondary: "bg-primary text-white hover:bg-accent-alt",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
  outline: "border border-primary/15 bg-white text-primary hover:border-accent/60 hover:text-primary",
  gold: "bg-gold-gradient text-primary shadow-card hover:shadow-hover"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base"
};

export function Button({
  children,
  variant = "primary",
  size = "lg",
  href,
  className,
  icon,
  type = "button",
  disabled,
  download,
  target,
  rel,
  onClick
}: ButtonProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-normal transition-all duration-300 hover:scale-[1.03] hover:tracking-[0.5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        data-cursor="button"
        style={{ x, y }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        {icon}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={classes}
      data-cursor="button"
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}
