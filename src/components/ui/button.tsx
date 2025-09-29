import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-foreground shadow-soft hover:shadow-hover hover:-translate-y-0.5 font-semibold rounded-xl",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90 rounded-xl",
        outline:
          "border border-border bg-background shadow-soft hover:bg-secondary hover:text-secondary-foreground rounded-xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/80 rounded-xl",
        ghost: "hover:bg-secondary hover:text-secondary-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        
        // Warm Personal Variants
        subtle: "bg-pastel-pink/30 text-foreground hover:bg-pastel-pink/40 hover:-translate-y-0.5 transition-all duration-300 rounded-xl",
        accent: "bg-pastel-blue/40 text-foreground hover:bg-pastel-blue/50 hover:-translate-y-0.5 transition-all duration-300 rounded-xl",
        minimal: "text-foreground hover:bg-secondary border border-transparent hover:border-border transition-all duration-300 rounded-xl",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };