import { cn } from "../../utils/cn";
import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-gray-900 shadow hover:bg-gray-100": variant === "default",
            "border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-100": variant === "outline",
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-10 px-4 py-2": size === "default",
            "h-11 px-8 py-2": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
