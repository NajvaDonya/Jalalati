import { DigitalCard } from "@/components/DigitalCard";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <DigitalCard />
    </LanguageProvider>
  );
}
