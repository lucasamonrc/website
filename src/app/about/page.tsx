import { CustomMDX } from "@/components/mdx";
import { getContent } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function About() {
  const about = getContent().find((content) => content.slug === "about");

  if (!about) {
    notFound();
  }

  return (
    <section>
      <div className="bg-white max-w-max p-2 rounded-full shadow-sm ring-1 ring-gray-200/50 shrink-0 mb-8 mx-auto">
        <Image
          src="/me.jpg"
          alt=""
          className="bg-gray-200 rounded-full -rotate-2"
          width="128"
          height="128"
        />
      </div>
      <article className="prose">
        <CustomMDX source={about.content} />
      </article>
    </section>
  );
}
