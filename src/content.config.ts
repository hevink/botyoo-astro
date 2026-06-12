import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Botyoo"),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

const help = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/help" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default("General"),
    order: z.number().default(99),
    popular: z.number().optional(),
  }),
})

export const collections = { blog, help }
