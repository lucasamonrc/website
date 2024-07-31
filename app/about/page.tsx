import { getContent } from "app/bookshelf/utils";
import { CustomMDX } from "app/components/mdx";
import { notFound } from "next/navigation";

export default function About() {
  const about = getContent().find((content) => content.slug === "about");

  if (!about) {
    notFound();
  }

  return (
    <section>
      <article className="prose">
        <CustomMDX source={about.content} />
      </article>
    </section>
  );
}
