import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Bookshelf",
  description: "These are the books I've read and wrote some notes about",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Bookshelf
      </h1>
      <BlogPosts />
    </section>
  );
}
