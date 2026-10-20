import { ComponentProps } from "react";

export function Button(props: ComponentProps<"button">) {
  return <button className="bg-indigo-600 text-white p-2 rounded" {...props} />;
}
