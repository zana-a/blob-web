import React from "react";

interface TypographyHeaderProps {
  children?: React.JSX.Element | string | string[];
}

export function H1(props: TypographyHeaderProps) {
  return <h1 className="text-6xl">{props.children}</h1>;
}

export function H2(props: TypographyHeaderProps) {
  return <h2 className="text-5xl">{props.children}</h2>;
}

export function H3(props: TypographyHeaderProps) {
  return <h1 className="text-4xl">{props.children}</h1>;
}

export function H4(props: TypographyHeaderProps) {
  return <h1 className="text-3xl">{props.children}</h1>;
}

export function H5(props: TypographyHeaderProps) {
  return <h1 className="text-2xl">{props.children}</h1>;
}

export function H6(props: TypographyHeaderProps) {
  return <h1 className="text-1xl">{props.children}</h1>;
}
