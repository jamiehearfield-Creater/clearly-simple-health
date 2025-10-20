import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-caramel text-white hover:bg-caramel/90 hover:shadow-hover hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-border bg-transparent hover:bg-card hover:border-foreground/20",
        secondary: "bg-card text-foreground hover:bg-card/80",
        ghost: "hover:bg-card/50",
        link: "text-caramel underline-offset-4 hover:underline font-medium",
        
        // Product-specific variants
        caramel: "bg-caramel text-white hover:bg-caramel/90 hover:shadow-hover hover:scale-[1.02]",
        matcha: "bg-matcha text-white hover:bg-matcha/90 hover:shadow-hover hover:scale-[1.02]",
        hazelnut: "bg-hazelnut text-white hover:bg-hazelnut/90 hover:shadow-hover hover:scale-[1.02]",
        neutral: "bg-neutral-warm text-foreground hover:bg-neutral-warm/80 hover:shadow-hover hover:scale-[1.02]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
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