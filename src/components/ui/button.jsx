import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:ring-6 focus-visible:ring-accent-default",
  {
    variants: {
      variant: {
        default:
          "bg-primary-default text-text-950 hover:bg-primary-default/90 hover:shadow-sm hover:shadow-accent-default",
        secondary:
          "bg-secondary-800 hover:bg-secondary-800/80 hover:shadow-sm hover:shadow-accent-default",
        confirmative:
          "bg-green-500 shadow-sm hover:bg-green-500/90 ",
        warning:
            "bg-yellow-500 shadow-sm hover:bg-yellow-500/90 ",
        destructive:
          "bg-red-500 shadow-sm hover:bg-red-500/90 ",
        outline:
          "border border-primary-default hover:border-primary-default/80 hover:shadow-accent-default",
        ghost:
          "hover:bg-background-100 hover:text-text-950",
        link:
          "underline-offset-4 hover:underline",
        card:
          "text-text-950 text-lg bg-background-50 shadow-lg shadow-background-700",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
