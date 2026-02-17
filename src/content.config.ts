import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const pages = defineCollection({
	loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			updatedDate: z.coerce.date(),
		}),
});

export const collections = { posts, pages };
