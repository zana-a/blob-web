import React from "react";
import { Anchor, Jumbotron } from "@/components";

export default function BrowsePage() {
  return (
    <div>
      <Jumbotron>
        <Jumbotron.Title>Browse</Jumbotron.Title>
      </Jumbotron>
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
