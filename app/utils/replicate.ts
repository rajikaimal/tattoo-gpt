import Replicate from "replicate";
import { configManager } from "~/utils/config";

const config = configManager();

const replicate = new Replicate({
  auth: config.replicate,
});

const promptReplicate = async (prompt: string) => {
  try {
    const output = await replicate.run(
      "stability-ai/sdxl:c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316",
      {
        input: {
          prompt: `${prompt}, closeup tattoo, detailed, 8k, crisp quality`,
          num_images: 1,
          guidance_scale: 8,
          num_inference_steps: 8,
        },
      }
    );

    return output;
  } catch (err) {
    console.error(`Error when prompting Replicate:`, err);
  }
};

export { promptReplicate };
