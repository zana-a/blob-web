import React from "react";

interface ContainerProps {
  children?: React.JSX.Element;
}

export function Container(props: ContainerProps): React.JSX.Element {
  return <div className="container px-4 mx-auto">{props.children}</div>;
}
