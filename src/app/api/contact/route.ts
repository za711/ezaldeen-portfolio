import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Contact request received successfully.",
    data: {
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      requestType: parsed.data.requestType
    }
  });
}
