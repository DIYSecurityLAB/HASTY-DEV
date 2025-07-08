import { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: AcceptedLanguages) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const languages = Object.values(AcceptedLanguages);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  if (isMobile) {
    return (
      <div className={`${className}`} ref={dropdownRef}>
        <div
          className="flex items-center gap-1 py-2 px-3 border-t border-[#316bb6]/20 mt-2 mx-2 hover:bg-white/10 hover:border-[#316bb6]/40 rounded-md transition-all duration-300 cursor-pointer touch-manipulation group active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none" }}
        >
          <span className="text-white text-xs font-normal group-hover:text-[#316bb6] transition-colors duration-300">
            {languageNames[currentLang]}
          </span>
          <div className="relative">
            <div className="text-white group-hover:text-[#316bb6] transition-colors duration-300 p-1">
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 8 7"
                fill="none"
              >
                <path
                  d="M1.51001 1.35181L4.28821 4.68541L7.06641 1.35181"
                  stroke="currentColor"
                  strokeWidth="2.22253"
                />
              </svg>
            </div>

            {isOpen && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-0 sm:transform-none bg-[#1a2c4a] border border-[#316bb6]/30 rounded-lg shadow-xl z-[9999] min-w-[160px] backdrop-blur-sm">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange(lang);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange(lang);
                    }}
                    className={`w-full text-left px-3 py-3 text-sm transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg touch-manipulation ${
                      currentLang === lang
                        ? "bg-[#316bb6] text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white active:bg-white/20"
                    }`}
                    style={{
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                    }}
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
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 py-[5.5px] pr-[10.934px] pb-[4.5px] pl-0 hover:bg-white/10 hover:shadow-lg hover:scale-105 rounded-md transition-all duration-300 cursor-pointer group touch-manipulation active:scale-95"
        style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none" }}
      >
        <span className="text-white text-[16px] font-normal group-hover:text-[#316bb6] transition-colors duration-300">
          {languageNames[currentLang]}
        </span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}
          width="12"
          height="12"
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
        <div className="absolute top-8 right-0 bg-[#1a2c4a] border border-[#316bb6]/30 rounded-lg shadow-xl z-[9999] min-w-[160px] backdrop-blur-sm">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang);
              }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg touch-manipulation ${
                currentLang === lang
                  ? "bg-[#316bb6] text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white active:bg-white/20"
              }`}
              style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none" }}
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
