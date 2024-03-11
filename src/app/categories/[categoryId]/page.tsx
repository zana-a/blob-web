import React from "react";

import { Anchor, H1 } from "@/components";
import { PostModel } from "@/models";

async function getPosts(id: number) {
  const response = await fetch(
    `http://localhost:8080/api/v1/posts/category/${id}`,
  );

  return (await response.json()) as PostModel[];
}

interface IdPageProps {
  params: { categoryId: number };
}

export default async function IdPage(props: IdPageProps) {
  const posts = await getPosts(props.params.categoryId);

  return (
    <div>
      <H1>Posts for category {props.params.categoryId.toString()}</H1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Anchor
              key={post.id}
              href={`/posts/${post.id}`}
            >
              {post.id.toString()}: {post.title}
            </Anchor>
          </li>
        ))}
      </ul>
    </div>
  );
}
