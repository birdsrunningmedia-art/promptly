import { Preset } from "@/types/types";

export function buildPrompt(preset: Preset, text: string) {
  return `
You are an expert communicator.

${preset.instructions}

Text:
${text}
`;
}
