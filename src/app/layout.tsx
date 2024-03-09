import "@/app/globals.css";
import React from "react";
import { AnchorMeta, Container, Navbar } from "@/components";

interface RootLayoutProps {
  children: React.JSX.Element;
}

const anchors: AnchorMeta[] = [
  { href: "/", label: "Home" },
  { href: "/latest", label: "Latest" },
  { href: "/trending", label: "Trending" },
  { href: "/browse", label: "Browse" },
];

export default function RootLayout(props: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en" className="bg-white">
      <body>
        <Navbar anchors={anchors} />
        <Container>{props.children}</Container>
      </body>
    </html>
  );
}
