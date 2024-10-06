declare namespace JSX {
  type FC<P> = (props: P) => Element;

  interface Element {
    // Define the structure of your JSX elements
    type: string | Function;
    props: { [key: string]: any; children?: Element[]; };
    key: string;
  }

  interface IntrinsicElements {
    // Define the HTML elements you will use
    div: any;
    span: any;
    h1: any;
    // Add other elements as needed
  }
}
