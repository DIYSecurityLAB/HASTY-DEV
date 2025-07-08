import { useState } from "react";
import { AcceptedLanguages, languageNames } from "../domain/locales/i18n";
import { useLanguage } from "../domain/locales/hooks/useLanguage";

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

function LanguageSwitcher({
  className = "",
  isMobile = false,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, changeLanguage } = useLanguage();


  const handleLanguageChange = (lang: AcceptedLanguages) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const languages = Object.values(AcceptedLanguages);

  if (isMobile) {
    return (
      <div className={`${className}`}>
        <div className="flex items-center gap-1 py-2 px-3 border-t border-[#316bb6]/20 mt-2 mx-2 hover:bg-white/5 rounded-md transition-all duration-300">
          <span className="text-white text-xs font-normal">
            {languageNames[currentLang]}
          </span>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#316bb6] transition-colors duration-300"
            >
              <svg
                className={`w-[6px] h-[3px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
              >
                <path
                  d="M1.51001 1.35181L4.28821 4.68541L7.06641 1.35181"
                  stroke="currentColor"
                  strokeWidth="2.22253"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute top-8 right-0 bg-[#1a2c4a] border border-[#316bb6]/30 rounded-lg shadow-xl z-50 min-w-[160px]">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg ${
                      currentLang === lang
                        ? "bg-[#316bb6] text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 py-[5.5px] pr-[10.934px] pb-[4.5px] pl-0 hover:bg-white/10 rounded-md transition-all duration-300 cursor-pointer group"
      >
        <span className="text-white text-[16 px] font-normal group-hover:text-[#316bb6] transition-colors duration-300">
          {languageNames[currentLang]}
        </span>
        <svg
          className={`w-[6px] h-[3px] transition-transform duration-300 ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
        >
          <path
            d="M1.51001 1.35181L4.28821 4.68541L7.06641 1.35181"
            stroke="currentColor"
            strokeWidth="2.22253"
            className="text-white group-hover:text-[#316bb6] transition-colors duration-300"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 bg-[#1a2c4a] border border-[#316bb6]/30 rounded-lg shadow-xl z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg ${
                currentLang === lang
                  ? "bg-[#316bb6] text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
