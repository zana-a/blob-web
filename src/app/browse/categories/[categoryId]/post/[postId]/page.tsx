import { H1 } from "@/components";
import { PostModel } from "@/models";

async function getPost(id: number) {
  const response = await fetch(`http://localhost:8080/api/v1/posts/${id}`);
  return (await response.json()) as PostModel;
}

interface Props {
  params: { postId: number };
}

export default async function PostPage(props: Props) {
  const post = await getPost(props.params.postId);

  return (
    <div>
      <H1>{post.title}</H1>
      <time>{post.createdAt.toString()}</time>
      <time>{post.updatedAt.toString()}</time>
      <article className="prose">
        <p>{post.content}</p>
      </article>
    </div>
  );
}
