import { ComponentProps } from "react";

export function Field(props: ComponentProps<"input">) {
  return <input className="border p-2 rounded" {...props} />;
}
