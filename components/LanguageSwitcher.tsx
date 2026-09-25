"use client";

import { languageLabels } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav
      aria-label={t("languageLabel")}
      dir="ltr"
      className="lang-switch absolute right-[3.6%] top-[3.1%] z-50 flex items-center text-[2.4cqw]"
    >
      {languageLabels.map(({ code, labelKey }, index) => {
        const active = language === code;
        return (
          <span key={code} className="flex items-center">
            {index > 0 && (
              <span className="px-[0.15em] text-white/30" aria-hidden>
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => setLanguage(code)}
              aria-pressed={active}
              className={`card-action min-h-11 px-[0.45em] transition-colors focus-visible:outline-none ${
                active ? "font-semibold text-[#F5C400]" : "text-white/75 hover:text-white"
              }`}
            >
              {t(labelKey)}
            </button>
          </span>
        );
      })}
    </nav>
  );
}
