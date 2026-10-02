import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: ReactNode;
  variant?: "primary" | "cream";
};

export function Button({
  asChild = false,
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  const variantClass = variant === "cream" ? "button-cream" : "button-primary";

  return (
    <Component className={`button-base ${variantClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}