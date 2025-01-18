import { Mastra } from "@mastra/core";
import { ragAgent } from "./agents";
import { PgVector } from "@mastra/rag";
import { contentPipeline } from "./workflows";

const pgVector = new PgVector(process.env.POSTGRES_CONNECTION_STRING!);

// Initialize Mastra with our components
export const mastra = new Mastra({
    agents: { ragAgent },
    workflows: {
        content: contentPipeline,
    },
    vectors: { pgVector } as any, // TODO: Fix type once @mastra/core and @mastra/rag are stable
});