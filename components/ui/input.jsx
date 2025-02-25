import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, formInput, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "py-[12px] pl-[52px] pr-[30px] rounded-[4px] bg-[#F6F6F6] w-full max-w-[677px]",
        formInput ? "py-[12px] pl-[52px] pr-[30px] rounded-[4px] bg-[#F6F6F6] w-full max-w-[677px]" : "",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
