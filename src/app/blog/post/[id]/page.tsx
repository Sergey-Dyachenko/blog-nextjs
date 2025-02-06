import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function Page({params} : {params: {id: string}}) {
  const post = posts.find((post) => post.id === params.id);

  if (!post || !post.id || !post.title || !post.content || !post.date) {
    return <div>Post not found or missing required fields</div>;
  }
  return (
    <>
      <h1 className="text-purple-800">Post</h1>
      <Post {...post} />
    </>)
}