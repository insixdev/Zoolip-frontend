import React from "react"
type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger" | "especial"
  size?: "sm" | "md" | "lg" | "xl"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, variant = "primary", size = "md", ...props }: ButtonProps) {
  const base = "rounded-xl font-semibold transition px-4 py-2"
  const variants = {
    primary: "bg-brown-600 text-white hover:bg-brown-600",
    especial: "bg-brand-especial text-black hover:bg-gray-300",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base",
    lg: "text-lg px-6 py-3",
    xl: "text-xl px-10 py-5"
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} mr-3 top-0 `} {...props}>
      {children}
    </button>
  )
}
