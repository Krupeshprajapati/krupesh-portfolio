import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.formData();

  const name = data.get("name");
  const email = data.get("email");
  const company = data.get("company");
  const message = data.get("message");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO!,
    subject: `New Inquiry from ${name}`,
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
