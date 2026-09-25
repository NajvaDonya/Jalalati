"use client";

import { asset } from "@/lib/asset";
import { useLanguage } from "./LanguageProvider";

export function BrandMark() {
  const { language } = useLanguage();
  const src =
    language === "fa" ? `${asset("/brand/logo.png")}?v=4` : `${asset("/brand/logo-en.png")}?v=1`;

  return (
    <div className="flex justify-center">
      <img src={src} alt="" className="w-[56cqw] max-w-full object-contain" />
    </div>
  );
}
