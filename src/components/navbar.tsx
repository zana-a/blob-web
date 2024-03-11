import React from "react";
import Link from "next/link";

import { Container } from "@/components";

function Anchor(props: { href: string; children: React.JSX.Element | string }) {
  return (
    <li>
      <Link href={props.href} className="hover:text-gray-800 transition-colors">
        {props.children}
      </Link>
    </li>
  );
}

function Group(props: { children: React.JSX.Element | React.JSX.Element[] }) {
  return (
    <div className="text-xs leading-none">
      <ul className="flex space-x-4 uppercase">{props.children}</ul>
    </div>
  );
}

export function Navbar(props: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  return (
    <header className="bg-gray-50 text-gray-400 border-b border-b-gray-100 py-4">
      <Container>
        <div className="flex items-center justify-between">
          {props.children}
        </div>
      </Container>
    </header>
  );
}

Navbar.Anchor = Anchor;
Navbar.Group = Group;
