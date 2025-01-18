import { mastra } from "../mastra";

// Run this somewhere
export async function ingestion({ url, metadata }: { url: string, metadata: Record<string, any> }) {

    const { runId, start } = mastra.getWorkflow("content").createRun()

    console.log(runId)

    await start({
        triggerData: {
            url,
            metadata,
        }
    })
}