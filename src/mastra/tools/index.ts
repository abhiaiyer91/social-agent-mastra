import { createVectorQueryTool } from "@mastra/rag";

// Create vector query tool for searching
export const vectorQueryTool = createVectorQueryTool({
  vectorStoreName: "pgVector",
  indexName: "content_embeddings",
  options: {
    provider: "OPEN_AI",
    model: "text-embedding-ada-002",
    maxRetries: 3,
  },
  topK: 5,
}) as any; // TODO: Fix type once @mastra/core and @mastra/rag are stable
