"use client";

import { useLanguage } from "./LanguageProvider";

export function CatalogButton() {
  const { catalogUrl, t } = useLanguage();

  if (!catalogUrl) return null;

  return (
    <a href={catalogUrl} download className="action-btn action-btn--ghost">
      {t("catalog")}
    </a>
  );
}
