"use client";

import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UploadFormSchema, UploadFormSchemaType } from "@/schema/schemas";
import ModeSelector from "@/components/ModeSelector";
// import { useButtonStore } from "@/store/useButtonStore";
import { convertImage } from "@/lib/image/convertImage";
import { downloadBlob } from "@/utils/download-helper";
import { retroInput, retroPrimaryButton } from "@/styles/retro";
import { wordsToAction } from "@/utils/helper-functions";
import { useButtonStore } from "@/store/useButtonStore";

export default function UploadClient() {
  const [loading, setLoading] = useState(false);
  const selectedValue = useButtonStore((s) => s.selectedValue);
  // const modeSelectedValue = useButtonStore((s) => s.selectedValue) as string;
  // const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  console.log(selectedValue);
  // create form
  const form = useForm({
    resolver: zodResolver(UploadFormSchema),
    defaultValues: {
      filename: "image",
    },
  });
  async function onSubmit(data: UploadFormSchemaType) {
    // set loading true
    setLoading(true);

    try {
      const webpBlob = await convertImage(
        data.image,
        wordsToAction(selectedValue),
      );
      console.log(webpBlob);
      downloadBlob(webpBlob, data.filename || "image");

      // toast.success("Image uploaded successfully");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="">
      <h1 className="mb-8 text-2xl hover:underline">
        Your very own image converter.
      </h1>
      <ModeSelector />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="filename"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className={retroInput}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* image */}
          <Controller
            name="image"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldContent>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                    className={`
    ${retroInput}
    file:border-0
    file:bg-zinc-200
    file:text-zinc-900
    file:h-full
    file:px-3
    file:mr-3
    file:shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#9ca3af]
    file:rounded-none
  `}
                  />
                </FieldContent>

                <FieldError />
              </Field>
            )}
          />

          <Button
            disabled={loading}
            type="submit"
            className={retroPrimaryButton}
          >
            {loading ? "Converting…" : "Convert"}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
