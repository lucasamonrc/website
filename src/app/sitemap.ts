import { getBlogPosts } from "@/lib/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/bookshelf/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/about", "/bookshelf"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}