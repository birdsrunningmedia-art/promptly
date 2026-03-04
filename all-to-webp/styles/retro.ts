// styles/retro.ts
export const retroInput =
  `
  h-10 px-3 text-sm
  bg-zinc-100 text-zinc-900
  border border-zinc-500
  shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#9ca3af]
  focus:outline-none
  focus:ring-1 focus:ring-black
  focus:ring-offset-1 focus:ring-offset-zinc-200
  rounded-none
  `;

export const retroButton =
  `
  h-10 px-4 text-sm
  bg-zinc-200 text-zinc-900
  border border-zinc-600
  shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#9ca3af]
  active:shadow-[inset_-1px_-1px_0_#ffffff,inset_1px_1px_0_#9ca3af]
  active:translate-y-[1px]
  select-none
  rounded-none
  `;

export const retroPrimaryButton =
  `
  h-10 px-5 text-sm font-medium
  bg-zinc-900 text-zinc-100
  border border-black
  shadow-[inset_1px_1px_0_#52525b,inset_-1px_-1px_0_#000000]
  hover:bg-zinc-800
  active:shadow-[inset_-1px_-1px_0_#52525b,inset_1px_1px_0_#000000]
  active:translate-y-[1px]
  disabled:opacity-50
  select-none
  rounded-none
  `;