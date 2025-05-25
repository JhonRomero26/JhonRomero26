import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  skills: z.array(z.string()),
  website: z.string(),
  repoUri: z.string(),
  publishDate: z.date(),
  readMinTime: z.number(),
});

export const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: projectSchema,
});
