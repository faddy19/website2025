import * as React from "react"
import { cn } from "~/lib/utils"

export interface HighlighterProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  highlight: string
}

export function Highlighter({ text, highlight, className, ...props }: HighlighterProps) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  
  return (
    <div className={cn("inline", className)} {...props}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            part.toLowerCase() === highlight.toLowerCase()
              ? "bg-yellow-200 dark:bg-yellow-800"
              : ""
          }
        >
          {part}
        </span>
      ))}
    </div>
  )
} 