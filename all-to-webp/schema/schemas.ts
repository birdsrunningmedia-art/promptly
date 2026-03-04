import { z } from "zod";

export const UploadFormSchema = z.object({
  filename: z.string().default(""),
  // options: z.enum([`PNG/JPG to WEBP`, "WEBP to JPG", 'WEBP to PNG']).default(`PNG/JPG to WEBP`),
  image: z
    .instanceof(File, { message: "File is required" })
    .refine((file) => file.size > 0, "File cannot be empty")
    .refine(
      (file) => file.type.startsWith("image/"),
      "Only image files are allowed",
    )
    .refine((file) => file.size <= 20 * 1024 * 1024, "Max file size is 20MB"),
});

export type UploadFormSchemaType = z.infer<typeof UploadFormSchema>;
