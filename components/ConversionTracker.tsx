"use client";
import { useEffect } from "react";
import { trackConversion } from "@/lib/gtag-conversions";

export default function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a");
      if (!a) return;
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href.startsWith("tel:")) trackConversion("phone");
      else if (href.includes("wa.me") || href.includes("whatsapp.com") || href.startsWith("whatsapp:"))
        trackConversion("whatsapp");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
