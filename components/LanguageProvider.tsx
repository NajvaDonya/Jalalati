"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  getCatalogUrl,
  getDir,
  isLanguage,
  STORAGE_KEY,
  translations,
  type Language,
  type TranslationKey,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  dir: "rtl" | "ltr";
  catalogUrl: string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const languageListeners = new Set<() => void>();
let clientReady = false;

function subscribeLanguage(onStoreChange: () => void) {
  languageListeners.add(onStoreChange);
  return () => languageListeners.delete(onStoreChange);
}

function notifyLanguageSubscribers() {
  languageListeners.forEach((listener) => listener());
}

function readStoredLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLanguage(stored) ? stored : "ar";
}

function getClientLanguage(): Language {
  if (!clientReady) return "ar";
  return readStoredLanguage();
}

function applyDocumentLanguage(lang: Language) {
  const dir = getDir(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.title = translations[lang].metaTitle;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", translations[lang].metaDescription);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getClientLanguage,
    () => "ar" as Language,
  );

  useEffect(() => {
    if (!clientReady) {
      clientReady = true;
      notifyLanguageSubscribers();
    }
    applyDocumentLanguage(language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    applyDocumentLanguage(lang);
    notifyLanguageSubscribers();
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: TranslationKey) => translations[language][key],
      dir: getDir(language),
      catalogUrl: getCatalogUrl(language),
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div dir={getDir(language)} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
