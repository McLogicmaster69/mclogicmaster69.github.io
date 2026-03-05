import { defineCollection, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    image: z.object({
      url: image(),
      alt: z.string(),
    }),
    category: z.enum(["personal", "education"]),
    tags: z.array(z.string()).optional(),
  });

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: articleSchema,
});

export const collections = { posts };
