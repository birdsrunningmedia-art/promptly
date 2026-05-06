// app/api/improve/route.ts
import { improveService } from "@/lib/services/improveService";

// body would be of text {
//   text,
//   presetId,
// }: {
//   text: string;
//   presetId: string;
// }

const FILE_TAG = "/api/improve/route.ts";

export async function POST(req: Request) {
  const body = await req.json();

  // Validate
  if (!body.text) {
    return Response.json({ error: "Missing text" }, { status: 400 });
  }

  const result = await improveService(body);

  return Response.json(result);
}
