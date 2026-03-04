export function convertImage(
  file: File,
  outputType: "image/webp" | "image/jpeg" | "image/png",
  options?: { quality?: number; maxSize?: number },
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    // Worker supported?
    if (typeof Worker !== "undefined") {
      const worker = new Worker(
        new URL("../../workers/image-workers.ts", import.meta.url),
        { type: "module" },
      );

      worker.postMessage({ file, outputType, ...options });

      worker.onmessage = (e) => {
        resolve(e.data);
        worker.terminate();
      };

      worker.onerror = reject;
      return;
    }

    reject(new Error("Web Worker not supported"));
  });
}
