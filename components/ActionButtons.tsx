"use client";

import { TEL_PHONE } from "@/lib/i18n";
import { PhoneIcon } from "./ContactIcons";
import { useLanguage } from "./LanguageProvider";

function CatalogIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-[5.5cqw]" aria-hidden>
      <path
        d="M12 4V15M12 15L8 11M12 15L16 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18.5H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ActionButtons() {
  const { t, catalogUrl } = useLanguage();

  return (
    <nav className="mt-auto w-full" aria-label={t("actionsLabel")}>
      <div className="grid grid-cols-2 gap-[3.2cqw]">
        <a
          href={TEL_PHONE}
          className="card-action flex h-[12.5cqw] items-center justify-center gap-[2.3cqw] rounded-full bg-[#F5C400] text-[4.1cqw] font-bold text-[#17202D] transition-transform hover:scale-[1.02] active:scale-95"
        >
          {t("call")}
          <PhoneIcon />
        </a>

        <a
          href={catalogUrl}
          download
          className="card-action flex h-[12.5cqw] items-center justify-center gap-[2.3cqw] rounded-full bg-[#F5C400] text-[4.1cqw] font-bold text-[#17202D] transition-transform hover:scale-[1.02] active:scale-95"
        >
          {t("catalog")}
          <CatalogIcon />
        </a>
      </div>
    </nav>
  );
}
