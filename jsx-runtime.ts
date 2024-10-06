export function jsx(type, props, key): JSX.Element {
  return { type, props: props || {}, key };
}

export function jsxs(type, props, key): JSX.Element {
  return { type, props: props || {}, key };
}

export function render(element: JSX.Element): string {
  const { type, props, key } = element;
  if (typeof type === "function") {
    return render(type(props));
  }

  if (!props.children) {
    return `<${type}></${type}>`;
  }

  if (Array.isArray(props.children)) {
    const childrenString = props.children.map((child) => {
      if (typeof child === "object") {
        return render(child);
      }
      return child;
    }).join("");
    console.log("childrenString", childrenString);
    return `<${type}>${childrenString}</${type}>`;
  }

  if (typeof props.children === "object") {
    return render(props.children);
  }

  return `<${type}>${props.children}</${type}>`;
}
