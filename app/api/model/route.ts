// Orignal Code is from: https://sdk.vercel.ai/providers/legacy-providers/hugging-face

import { HfInference } from '@huggingface/inference';
import { HuggingFaceStream, StreamingTextResponse } from 'ai';
import { experimental_buildOpenAssistantPrompt } from 'ai/prompts';

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = Hf.textGenerationStream({
	// This model hallucinates a lot during responses, so you might need to cross-check the outputs with multiple attempts
	model: 'prsdm/phi-2-medquad',
	// // If you want to try another model this is really good model to start with
    // model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    inputs: experimental_buildOpenAssistantPrompt(messages),
    parameters: {
      max_new_tokens: 200,
      typical_p: 0.2,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false,
    },
  });

  const stream = HuggingFaceStream(response);

  return new StreamingTextResponse(stream);
}