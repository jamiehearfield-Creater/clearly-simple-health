import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Futuristic Neon Variants
        default: "bg-gradient-primary text-primary-foreground hover:shadow-neon-blue hover:-translate-y-1 font-bold tracking-wide transition-all duration-300",
        accent: "bg-gradient-accent text-accent-foreground hover:shadow-neon-purple hover:-translate-y-1 font-bold tracking-wide transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-neon-purple/50 hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:shadow-neon-blue font-semibold transition-all duration-300",
        ghost: "text-foreground hover:bg-secondary hover:text-neon-blue transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto hover:text-neon-magenta transition-colors duration-300",
        // Legacy variants for compatibility
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-11 w-11",
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
