import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", withArrow, children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-forest-primary text-ivory hover:bg-forest-dark focus:ring-forest-primary",
      secondary: "bg-gold text-forest-deep hover:bg-gold-light focus:ring-gold",
      outline:
        "border-2 border-forest-primary text-forest-primary hover:bg-forest-primary hover:text-ivory focus:ring-forest-primary",
      ghost: "text-forest-primary hover:bg-forest-primary/5 focus:ring-forest-primary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight
            className={cn(
              "ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            )}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
