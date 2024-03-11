import { H1 } from "@/components";
import React from "react";

export function Jumbotron(props: { children?: React.JSX.Element }) {
  return <div className="py-6">{props.children}</div>;
}

function Title(props: { children: React.JSX.Element | string }) {
  return <H1>{props.children}</H1>;
}

Jumbotron.Title = Title;
