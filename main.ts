import { App } from "./app.tsx";
import { render } from "./jsx-runtime.ts";

function greet(name: string): JSX.Element {
  return App({ name });
}

console.log(render(greet("Alberto")));