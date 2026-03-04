"use client";
import React, { useEffect } from "react";
import { useButtonStore } from "@/store/useButtonStore";

export default function ModeSelector() {
  const buttons = useButtonStore((s) => s.buttons);
  const press = useButtonStore((s) => s.press);

  useEffect(() => {
    press(1);
  }, [press]);
  return (
    <section className="mb-8">
      {buttons.map((btn) => (
        <button
          className={`${
            btn.isPressed
              ? `px-4 py-2
    text-sm font-medium
    bg-zinc-600 text-zinc-100
    border border-zinc-500
    shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#9ca3af]
    active:shadow-[inset_-1px_-1px_0_#ffffff,inset_1px_1px_0_#9ca3af]
    active:translate-y-[1px]
    select-none`
              : `px-4 py-2
    text-sm font-medium
    bg-zinc-200 text-zinc-900
    border border-zinc-500
    shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#9ca3af]
    active:shadow-[inset_-1px_-1px_0_#ffffff,inset_1px_1px_0_#9ca3af]
    active:translate-y-[1px]
    select-none`
          }`}
          onClick={() => press(btn.id)}
          key={btn.id}
        >
          {btn.value}
        </button>
      ))}
    </section>
  );
}
