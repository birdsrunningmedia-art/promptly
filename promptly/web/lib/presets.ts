// lib/presets.ts
import { Preset } from "@/types/types";

// Record<string, Preset> ensures every key maps to a Preset object
export const presets: Record<string, Preset> = {
  clarify: {
    instructions: "Make the text clearer and simpler.",
  },
  expand: {
    instructions: "Expand this into a detailed prompt.",
  },
};
export function getPreset(id: string) {
  return presets[id];
}
