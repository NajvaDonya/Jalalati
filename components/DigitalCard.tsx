"use client";

import { MAPS_URL, TEL_MOBILE, TEL_PHONE } from "@/lib/i18n";
import { ActionButtons } from "./ActionButtons";
import { BrandMark } from "./BrandMark";
import { InfoRow } from "./InfoRow";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocationIcon, MobileIcon, PhoneIcon } from "./ContactIcons";
import { useLanguage } from "./LanguageProvider";

export function DigitalCard() {
  const { t, dir, language } = useLanguage();

  return (
    <main dir={dir} className="relative h-dvh w-full overflow-hidden bg-[#111d2b] text-white">
      <div className="jc-stage">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgrounds/jalalati-mock.jpg')" }}
        />

        {/* Covers the language labels painted into the artwork so only the live switcher remains. */}
        <div className="jc-lang-mask pointer-events-none" aria-hidden />
        <LanguageSwitcher />

        <div className="jc-card">
          <div className="jc-rim h-full w-full rounded-[9cqw] p-px shadow-[0_8cqw_18cqw_rgba(0,0,0,.45)]">
            <div className="jc-face relative flex h-full w-full flex-col items-center overflow-hidden rounded-[8.8cqw] px-[12.2cqw] py-[12.5cqw]">
              <BrandMark />

              <h1
                className={`mt-[9.9cqw] whitespace-nowrap text-center leading-[1.15] font-bold ${
                  language === "fa" ? "text-[8.7cqw]" : "text-[6.1cqw]"
                }`}
              >
                <span className="text-white">{t("companyLine1")} </span>
                <span className="text-[#F5C400]">{t("companyLine2")}</span>
              </h1>

              <p className="mt-[3.6cqw] text-center text-[4.3cqw] leading-[1.45] text-white/80">
                {t("description")}
              </p>

              <div className="mt-[8.4cqw] w-full">
                <InfoRow
                  icon={<PhoneIcon />}
                  label={t("phoneLabel")}
                  value={t("phone")}
                  href={TEL_PHONE}
                />
                <InfoRow
                  icon={<MobileIcon />}
                  label={t("mobileLabel")}
                  value={t("mobile")}
                  href={TEL_MOBILE}
                  divider
                />
                <InfoRow
                  icon={<LocationIcon />}
                  label={t("addressLabel")}
                  value={t("address")}
                  href={MAPS_URL}
                  external
                  divider
                />
              </div>

              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
