import "@/app/globals.css";
import React from "react";
import { Container, Navbar } from "@/components";

interface RootLayoutProps {
  children: React.JSX.Element;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" className="bg-white">
      <body>
        <Navbar>
          <Navbar.Group>
            <Navbar.Anchor href="/">Home</Navbar.Anchor>
            <Navbar.Anchor href="/browse">Browse</Navbar.Anchor>
          </Navbar.Group>
          <Navbar.Group>
            <Navbar.Anchor href="/">Home</Navbar.Anchor>
            <Navbar.Anchor href="/browse">Browse</Navbar.Anchor>
          </Navbar.Group>
        </Navbar>
        <Container>{props.children}</Container>
      </body>
    </html>
  );
}
