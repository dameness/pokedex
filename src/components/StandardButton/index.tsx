import { ComponentProps } from "react";

export default function StandardButton(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="px-3 py-2 bg-slate-300/50 dark:hover:bg-neutral-500/30 dark:bg-neutral-200/70 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800/20 hover:text-slate-100 transition duration-200"
    >
      {props.children}
    </button>
  );
}
