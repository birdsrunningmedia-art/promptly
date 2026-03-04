import { create } from "zustand";
import { ButtonStore } from "@/types/types";

export const useButtonStore = create<ButtonStore>((set) => ({
  buttons: [
    { id: 1, value: "JPEG/PNG TO WEBP", isPressed: false },
    { id: 2, value: "WEBP TO JPEG", isPressed: false },
    { id: 3, value: "WEBP TO PNG", isPressed: false },
  ],

  selectedValue: null,

  press: (id) =>
    set((state) => {
      const updatedButtons = state.buttons.map((btn) =>
        btn.id === id
          ? { ...btn, isPressed: true }
          : { ...btn, isPressed: false },
      );

      const selected = updatedButtons.find((b) => b.isPressed);

      return {
        buttons: updatedButtons,
        selectedValue: selected ? selected.value : null,
      };
    }),
}));

// const buttons = useButtonStore((s) => s.buttons);
// const press = useButtonStore((s) => s.press);

// {buttons.map((btn) => (
//   <button
//     key={btn.id}
//     onClick={() => press(btn.id)}
// style={{
//   background: btn.isPressed ? "black" : "gray",
//   color: "white",
// }}
//   >
//     {btn.value}
//   </button>
// ))}

// fetch("/api/submit", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     buttonValue: selectedValue,
//   }),
// });
