export const wordsToAction = (
  word: string | null,
): "image/webp" | "image/jpeg" | "image/png" => {
  switch (word) {
    case "JPEG/PNG TO WEBP":
      return "image/webp";

    case "WEBP TO JPEG":
      return "image/jpeg";

    case "WEBP TO PNG":
      return "image/png";

    default:
      return "image/webp";
  }
};
