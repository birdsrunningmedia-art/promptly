// src/workers/image-worker.ts
self.onmessage = async (e) => {
  const { file, outputType, quality = 0.85, maxSize = 2048 } = e.data;

  if (file.size > 15 * 1024 * 1024) {
    throw new Error("File too large");
  }

  const bitmap = await createImageBitmap(file);

  const scale = Math.min(maxSize / bitmap.width, maxSize / bitmap.height, 1);
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(bitmap, 0, 0, width, height);

  const blob = await canvas.convertToBlob({
    type: outputType,
    quality,
  });

  self.postMessage(blob);
};