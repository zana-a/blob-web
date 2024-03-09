import React from "react";
import Link from "next/link";
import { Container } from "@/components";

export interface NavbarAnchorMeta {
  href: string;
  label: string;
}

function Anchor(meta: NavbarAnchorMeta) {
  return (
    <li>
      <Link href={meta.href} className="hover:text-gray-800 transition-colors">
        {meta.label}
      </Link>
    </li>
  );
}

interface NavbarProps {
  anchors: NavbarAnchorMeta[];
}

export function Navbar(props: NavbarProps) {
  return (
    <header className="bg-gray-50 text-gray-400 border-b border-b-gray-100 py-4">
      <Container>
        <div className="text-xs leading-none flex">
          <nav>
            <ul className="flex space-x-4 uppercase">
              {props.anchors.map((meta) => Anchor(meta))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
