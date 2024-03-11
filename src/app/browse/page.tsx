import React from "react";
import { Anchor, H1 } from "@/components";

export default function BrowsePage() {
  return (
    <div>
      <H1>Browse</H1>
      <ul>
        <li>
          <Anchor href="/categories" key={"categories"}>
            Categories
          </Anchor>
        </li>
        <li>
          <Anchor href="/posts" key={"categories"}>
            Posts
          </Anchor>
        </li>
      </ul>
    </div>
  );
}
