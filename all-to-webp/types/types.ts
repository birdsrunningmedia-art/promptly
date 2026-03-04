export type OptionType = `PNG/JPG to WEBP` | "WEBP to JPG" | "WEBP to PNG";

type Button = {
  id: number;
  value: string;
  isPressed: boolean;
};

export type ButtonStore = {
  buttons: Button[];
  press: (id: number) => void;
  selectedValue: string | null;
};
