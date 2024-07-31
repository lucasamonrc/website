import { BlogPosts } from "app/components/posts";
import { getContent } from "./bookshelf/utils";
import { notFound } from "next/navigation";
import { CustomMDX } from "./components/mdx";

export default function Page() {
  const intro = getContent().find((content) => content.slug === "intro");

  if (!intro) {
    notFound();
  }

  return (
    <section>
      <div className="bg-white max-w-max p-2 rounded-full shadow-sm ring-1 ring-gray-200/50 -rotate-2 shrink-0 mb-8 mx-auto">
        <img
          src="https://github.com/lucasamonrc.png"
          alt=""
          className="bg-gray-200 rounded-full w-20 sm:w-24"
        />
      </div>
      <article className="prose">
        <CustomMDX source={intro.content} />
      </article>
    </section>
  );
}
