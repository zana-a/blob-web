import "@/app/globals.css";
import React from "react";
import { Container, Navbar, NavbarAnchorMeta } from "@/components";

interface RootLayoutProps {
  children: React.JSX.Element;
}

const anchors: NavbarAnchorMeta[] = [
  { href: "/", label: "Home" },
  { href: "/latest", label: "Latest" },
  { href: "/trending", label: "Trending" },
  { href: "/browse", label: "Browse" },
];

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" className="bg-white">
      <body>
        <Navbar anchors={anchors} />
        <Container>{props.children}</Container>
      </body>
    </html>
  );
}
