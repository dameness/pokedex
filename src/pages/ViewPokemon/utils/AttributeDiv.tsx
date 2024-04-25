import { ComponentProps } from "react";

export default function AttributeDiv(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className="font-extrabold rounded-sm py-1.5 px-6 bg-transparent flex items-center justify-between gap-2"
    >
      {props.children}
    </div>
  );
}
