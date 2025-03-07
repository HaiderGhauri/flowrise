import React from "react"

interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={`max-w-6xl mx-auto w-full ${className}`}>{children}</div>;
}