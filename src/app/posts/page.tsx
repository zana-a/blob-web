import { PostModel } from "@/models";

async function getPosts() {
  const response = await fetch("http://localhost:8080/api/v1/posts");
  return (await response.json()) as PostModel[];
}

export default async function PostsPage() {
    const posts = await getPosts();

    return <div>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
}