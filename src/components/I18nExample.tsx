// Exemplo de como usar o sistema i18n implementado em qualquer componente

import { useTranslation } from "react-i18next";
import { useLanguage } from "../domain/locales/hooks/useLanguage";
import { AcceptedLanguages } from "../domain/locales/i18n";

function I18nExample() {
  const { t } = useTranslation();
  const { currentLang, changeLanguage } = useLanguage();

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{t("header.contact_button")}</h2>

      <p className="mb-4">{t("hero.description")}</p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => changeLanguage(AcceptedLanguages.pt)}
          className={`px-4 py-2 rounded ${currentLang === "pt" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Português
        </button>
        <button
          onClick={() => changeLanguage(AcceptedLanguages.en)}
          className={`px-4 py-2 rounded ${currentLang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage(AcceptedLanguages.es)}
          className={`px-4 py-2 rounded ${currentLang === "es" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Español
        </button>
      </div>

      <p className="text-sm text-gray-600">Idioma atual: {currentLang}</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          {t("products.section_title")}
        </h3>
        <ul className="list-disc ml-6">
          <li>{t("products.hastyp2p_core.name")}</li>
          <li>{t("products.hastypay_engine.name")}</li>
          <li>{t("products.hastylegal_guide.name")}</li>
          <li>{t("products.hastybrand_studio.name")}</li>
        </ul>
      </div>
    </div>
  );
}

export default I18nExample;
