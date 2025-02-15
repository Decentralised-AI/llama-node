import { LLM } from "llama-node";
import { LLamaCpp, type LoadConfig } from "llama-node/dist/llm/llama-cpp.js";
import path from "path";

const model = path.resolve(process.cwd(), "../ggml-vicuna-7b-1.1-q4_1.bin");

const llama = new LLM(LLamaCpp);

const config: LoadConfig = {
    path: model,
    enableLogging: true,
    nCtx: 1024,
    nParts: -1,
    seed: 0,
    f16Kv: false,
    logitsAll: false,
    vocabOnly: false,
    useMlock: false,
    embedding: false,
    useMmap: true,
};

const content = "how are you?";

const run = async () => {
    await llama.load(config);

    await llama.tokenize({ content, nCtx: 2048 }).then(console.log);
};

run();
