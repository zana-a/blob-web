import { PostModel } from "@/models";
import { Jumbotron } from "@/components";
import React from "react";

async function getPosts() {
  const response = await fetch("http://localhost:8080/api/v1/posts");
  return (await response.json()) as PostModel[];
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <Jumbotron>
        <Jumbotron.Title>Posts</Jumbotron.Title>
      </Jumbotron>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
