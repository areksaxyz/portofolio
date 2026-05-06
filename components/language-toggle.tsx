"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "id" : "en";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={
        language === "en" ? "Switch language to Indonesian" : "Ganti bahasa ke English"
      }
      onClick={() => setLanguage(nextLanguage)}
      className="min-w-20"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {language === "en" ? "ID" : "EN"}
    </Button>
  );
}
