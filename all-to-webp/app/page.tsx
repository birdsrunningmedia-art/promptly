import React from "react";
import UploadClient from "@/components/Upload/Upload";

export default function page() {
  return (
    <>
      <section className="font-mono min-h-screen justify-center items-center bg-zinc-200 hidden sm:flex">
        <UploadClient />
      </section>
      <section className="sm:hidden bg-zinc-200 flex items-center justify-center flex-col min-h-screen">
        <h1 className="text-3xl w-fit text-center">
          Not available on mobile screens
        </h1>
      </section>
    </>
  );
}
