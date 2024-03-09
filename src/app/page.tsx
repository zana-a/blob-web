import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blob — Home",
  description: "Blob homepage!",
};

interface RootPageProps {
  children: React.JSX.Element;
}

export default function RootPage(props: RootPageProps): React.JSX.Element {
  return (
    <div>
      <h1>Homepage</h1>
      {props.children}
    </div>
  );
}
