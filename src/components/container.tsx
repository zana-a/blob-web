import React from "react";

export function Container(props: {
  children?: React.JSX.Element[] | React.JSX.Element;
}) {
  return <div className="container px-4 mx-auto">{props.children}</div>;
}
