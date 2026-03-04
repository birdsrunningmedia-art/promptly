# Image Converter App 🖼️

A simple **browser-based image converter** that converts:

- JPEG / PNG → WebP  
- WebP → JPEG / PNG  

All conversions are done **entirely in the browser** using the **Canvas API** — no server required.

## Features

- Convert images instantly without uploading to a server
- Drag & drop or file select support
- Supports JPEG, PNG, and WebP formats
- Download converted files immediately

## How it Works

1. Select or drag an image file.
2. The app draws it onto an HTML Canvas element.
3. Canvas converts it to the selected format.
4. You can then download the converted file.

## Tech Stack

- [Next.js](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- Google Fonts: Geist & Geist Mono  
- Browser-native Canvas API

## Usage

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/image-converter-app.git