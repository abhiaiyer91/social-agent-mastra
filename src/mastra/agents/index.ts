import { Agent } from '@mastra/core';
import { vectorQueryTool } from '../tools';

// Create our RAG agent
export const ragAgent = new Agent({
  name: "Content RAG Agent",
  instructions: `You are a helpful assistant that processes web content for social media marketing.
                You help find relevant content and insights that can be used to create engaging social media posts.`,
  model: {
    provider: "OPEN_AI",
    name: "gpt-4",
  },
  tools: {
    vectorQueryTool,
  },
});