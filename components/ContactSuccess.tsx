"use client";

import { useSearchParams } from "next/navigation";

export default function ContactSuccess() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent");

  if (!sent) return null;

  return (
    <div
      className="
        max-w-4xl mx-auto mb-12
        rounded-2xl
        border border-green-500/20
        bg-green-500/10
        p-6 text-center text-green-300
      "
    >
      ✅ Thank you! Your message has been sent.
      <br />
      I’ll get back to you within 24 hours.
    </div>
  );
}
