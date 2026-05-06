// lib/services/improveService.ts

import { getPreset } from "../presets";
import { callAI } from "../ai";
import { buildPrompt } from "@/utils/helper-functions/buildPrompt";

export async function improveService({
  text,
  presetId,
}: {
  text: string;
  presetId: string;
}) {
  const preset = getPreset(presetId);

  const prompt = buildPrompt(preset, text);

  const aiResponse = await callAI(prompt);

  return {
    result: aiResponse,
  };
}
