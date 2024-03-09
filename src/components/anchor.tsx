import Link from "next/link";
import React from "react";

interface AnchorProps {
  href: string;
  children?: React.JSX.Element | string | string[];
  key?: React.Key;
}

export function Anchor({ key, children, href }: AnchorProps) {
  return (
    <Link key={key} href={href} className="underline text-blue-500">
      {children}
    </Link>
  );
}
