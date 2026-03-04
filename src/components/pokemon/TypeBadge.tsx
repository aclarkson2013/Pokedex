"use client";

import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import { cn } from "@/lib/utils/cn";

interface TypeBadgeProps {
  type: string;
  size?: "sm" | "md";
}

export function TypeBadge({ type, size = "sm" }: TypeBadgeProps) {
  const colors = TYPE_COLORS[type] ?? {
    bg: "bg-gray-500",
    text: "text-white",
    border: "border-gray-500",
  };

  return (
    <span
      className={cn(
        "inline-block rounded-full font-semibold capitalize",
        colors.bg,
        colors.text,
        size === "sm" && "px-2 py-0.5 text-[10px]",
        size === "md" && "px-3 py-1 text-xs"
      )}
    >
      {type}
    </span>
  );
}
