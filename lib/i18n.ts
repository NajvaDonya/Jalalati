import { asset } from "./asset";

export type Language = "fa" | "en" | "ar";

export type TranslationKey =
  | "companyName"
  | "companyLine1"
  | "companyLine2"
  | "description"
  | "phone"
  | "mobile"
  | "phoneLabel"
  | "mobileLabel"
  | "addressLabel"
  | "address"
  | "addressLine1"
  | "addressLine2"
  | "call"
  | "directions"
  | "catalog"
  | "metaTitle"
  | "metaDescription"
  | "actionsLabel"
  | "languageLabel"
  | "langFa"
  | "langEn"
  | "langAr";

export const STORAGE_KEY = "jalalati-lang-v2";

export const catalogByLanguage = {
  en: "/catalog-en.pdf",
  ar: "/catalog-er.pdf",
} as const;

export function getCatalogUrl(lang: Language): string {
  if (lang === "ar") return asset(catalogByLanguage.ar);
  return asset(catalogByLanguage.en);
}

export function getDir(lang: Language): "rtl" | "ltr" {
  return lang === "en" ? "ltr" : "rtl";
}

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Unit51, First floor, No 522, Lalehzarnou Street");

export const TEL_PHONE = "tel:+982133923920";
export const TEL_MOBILE = "tel:+989123879089";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  fa: {
    companyName: "سیم و کابل جلالتی",
    companyLine1: "سیم و کابل",
    companyLine2: "جلالتی",
    description: "فروش انواع سیم و کابل ایرانی و خارجی",
    phone: "+۹۸۲۱۳۳۹۲۳۹۲۰",
    mobile: "+۹۸۹۱۲۳۸۷۹۰۸۹",
    phoneLabel: "تلفن ثابت",
    mobileLabel: "همراه",
    addressLabel: "آدرس",
    address: "تهران، خ لاله زار نو، پلاک ۵۲۲، طبقه اول، پلاک ۵۱",
    addressLine1: "تهران، خ لاله زار نو",
    addressLine2: "پلاک ۵۲۲، طبقه اول، پلاک ۵۱",
    call: "تماس با ما",
    directions: "مسیریابی",
    catalog: "کاتالوگ",
    metaTitle: "سیم و کابل جلالتی | فروش سیم و کابل",
    metaDescription: "فروش انواع سیم و کابل ایرانی و خارجی",
    actionsLabel: "اقدامات",
    languageLabel: "زبان",
    langFa: "فارسی",
    langEn: "English",
    langAr: "العربية",
  },
  en: {
    companyName: "Jalalati Wire & Cable",
    companyLine1: "Wire & Cable",
    companyLine2: "Jalalati",
    description: "Supplier of Iranian and International Wires & Cables",
    phone: "+982133923920",
    mobile: "+989123879089",
    phoneLabel: "Office",
    mobileLabel: "Mobile",
    addressLabel: "Address",
    address: "Unit51, First floor, No 522, Lalehzarnou Street",
    addressLine1: "Unit51, First floor, No 522",
    addressLine2: "Lalehzarnou Street",
    call: "Call Us",
    directions: "Get Directions",
    catalog: "Catalog",
    metaTitle: "Jalalati Wire & Cable",
    metaDescription: "Supplier of Iranian and international wires and cables.",
    actionsLabel: "Actions",
    languageLabel: "Language",
    langFa: "فارسی",
    langEn: "English",
    langAr: "العربية",
  },
  ar: {
    companyName: "أسلاك وكابلات جلالتي",
    companyLine1: "أسلاك وكابلات",
    companyLine2: "جلالتي",
    description: "بيع مختلف أنواع الأسلاك والكابلات الإيرانية والأجنبية",
    phone: "+٩٨٢١٣٣٩٢٣٩٢٠",
    mobile: "+٩٨٩١٢٣٨٧٩٠٨٩",
    phoneLabel: "الهاتف",
    mobileLabel: "الجوال",
    addressLabel: "العنوان",
    address: "طهران، شارع لاله زار نو، رقم ٥٢٢، الطابق الأول، الوحدة ٥١",
    addressLine1: "طهران، شارع لاله زار نو",
    addressLine2: "رقم ٥٢٢، الطابق الأول، الوحدة ٥١",
    call: "اتصل بنا",
    directions: "الموقع",
    catalog: "الكتالوج",
    metaTitle: "أسلاك وكابلات جلالتي",
    metaDescription: "بيع مختلف أنواع الأسلاك والكابلات الإيرانية والأجنبية",
    actionsLabel: "الإجراءات",
    languageLabel: "اللغة",
    langFa: "فارسی",
    langEn: "English",
    langAr: "العربية",
  },
};

export function isLanguage(value: string | null): value is Language {
  return value === "fa" || value === "en" || value === "ar";
}

export const languageLabels: { code: Language; short: string; labelKey: TranslationKey }[] = [
  { code: "fa", short: "FA", labelKey: "langFa" },
  { code: "en", short: "EN", labelKey: "langEn" },
  { code: "ar", short: "AR", labelKey: "langAr" },
];
