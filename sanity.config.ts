import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Site",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID ?? '',
  
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
