import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const current = i18n.resolvedLanguage || i18n.language || "en";

  const switchTo = (lng) => {
    if (lng !== current) {
      i18n.changeLanguage(lng);
      try {
        localStorage.setItem("i18nextLng", lng);
      } catch (error) {
        console.error("Error saving language to localStorage:", error);
      }
    }
  };

  return (
    <div className="language-switcher" style={{ display: "flex", gap: 8 }}>
      <button
        type="button"
        onClick={() => switchTo("es")}
        aria-pressed={current.startsWith("es")}
        title={t("switcher.es")}
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        🇪🇸 {t("switcher.es")}
      </button>
      <span aria-hidden>·</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={current.startsWith("en")}
        title={t("switcher.en")}
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        🇺🇸 {t("switcher.en")}
      </button>
    </div>
  );
}
