import React from "react";
import { Anchor, H1 } from "@/components";

export default function BrowsePage() {
  return (
    <div>
      <H1>Browse</H1>
      <ul>
        <li>
          <Anchor href="/browse/categories" key={"categories"}>
            Categories
          </Anchor>
        </li>
        <li>
          <Anchor href="/browse/date" key={"categories"}>
            Date
          </Anchor>
        </li>
      </ul>
    </div>
  );
}
