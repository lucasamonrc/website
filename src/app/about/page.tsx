import { CustomMDX } from "@/components/mdx";
import { getContent } from "@/lib/utils";
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
