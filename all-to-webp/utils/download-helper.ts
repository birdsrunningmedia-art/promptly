export function downloadBlob(blob: Blob, filename: string) {
  const ext =
    blob.type === "image/jpeg"
      ? "jpg"
      : blob.type === "image/png"
        ? "png"
        : blob.type === "image/webp"
          ? "webp"
          : "";

  const fullName = ext ? `${filename}.${ext}` : filename;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fullName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
