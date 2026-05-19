import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Newsletter subscription received successfully.",
    data: { email: parsed.data.email }
  });
}
