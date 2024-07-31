import { getContent } from "../lib/utils";
import { notFound } from "next/navigation";
import { CustomMDX } from "../components/mdx";
import Image from "next/image";

export default function Page() {
  const intro = getContent().find((content) => content.slug === "intro");

  if (!intro) {
    notFound();
  }

  return (
    <section>
      <div className="bg-white max-w-max p-2 rounded-full shadow-sm ring-1 ring-gray-200/50 shrink-0 mb-8 mx-auto">
        <Image
          src="/me.jpg"
          alt=""
          className="bg-gray-200 rounded-full -rotate-2"
          width="80"
          height="80"
        />
      </div>
      <article className="prose">
        <CustomMDX source={intro.content} />
      </article>
    </section>
  );
}
