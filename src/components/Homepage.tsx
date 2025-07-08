import { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";
import ProductSection from "./ProductSection";
import RotatingText from "./RotatingText";
import LanguageSwitcher from "./LanguageSwitcher";

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <SEO />
      <div className="w-full min-h-screen bg-[#01010d] text-white font-[Inter] relative overflow-x-hidden">
        {/* Content wrapper to ensure it's above glow */}
        <div className="relative z-[2]">
          {/* Background Layer */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#01010d] -z-20"></div>

          {/* Radial Glow Background */}
          <div
            className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)",
              mixBlendMode: "soft-light",
            }}
          ></div>

          {/* Circuit Background */}
          <div className="absolute -top-16 sm:-top-32 -left-0.5 w-full sm:w-[1580px] h-[400px] sm:h-[789px] -z-10 opacity-80 sm:opacity-100">
            <div className="relative w-full h-full bg-[#d9d9d9]">
              <div className="absolute top-[108px] sm:top-[216px] left-[112px] sm:left-[224px] w-[calc(100%-224px)] sm:w-[1357px] h-[286px] sm:h-[573px] bg-white"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e813f8e15d799c4c8651e01a46f7898f9ebe1d20?width=3108"
                alt=""
                className="absolute top-[57px] sm:top-[114px] -left-1 w-full sm:w-[1554px] h-[393px] sm:h-[786px] opacity-[0.5686] mix-blend-multiply object-cover"
              />
            </div>
          </div>

          {/* Header Section */}
          <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#0e213a] via-[#1a2c4a] to-[#0e213a] z-[1000] py-3 lg:py-[15px] h-auto lg:h-[90px] flex items-center relative backdrop-blur-sm border-b border-[#316bb6]/20 shadow-lg">
            {/* Header glass effect overlay */}
            <div className="absolute inset-0 bg-[#0e213a]/80 backdrop-blur-md"></div>
            <div className="max-w-[1580px] mx-auto px-4 sm:px-[20px] lg:px-[54px] w-full relative z-10">
              {/* Desktop and Mobile Header Container */}
              <div className="flex items-center justify-between w-full h-14 lg:h-[60px]">
                {/* Logo */}
                <div className="logo-section">
                  <a
                    href="#top"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="cursor-pointer group"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
                      alt="HastyDev Logo"
                      className="h-6 lg:h-[26px] w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(49,107,182,0.6)] group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-[135px] items-center">
                  <a
                    href="#produtos"
                    className="text-white no-underline text-[15px] font-normal transition-all duration-300 hover:text-[#316bb6] hover:drop-shadow-[0_0_4px_rgba(49,107,182,0.5)] relative group px-2 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("produtos")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t("header.links.produto")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#316bb6] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#dashboard"
                    className="text-[#316bb6] no-underline text-[15px] font-normal transition-all duration-300 drop-shadow-[0_0_4px_rgba(49,107,182,0.5)] relative group px-2 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("dashboard")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t("header.links.plataforma")}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#316bb6]"></span>
                  </a>
                  <a
                    href="#sobre"
                    className="text-white no-underline text-[15px] font-normal transition-all duration-300 hover:text-[#316bb6] hover:drop-shadow-[0_0_4px_rgba(49,107,182,0.5)] relative group px-2 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("sobre")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t("header.links.sobre")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#316bb6] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </nav>

                {/* Desktop Language Selector */}
                <LanguageSwitcher className="hidden lg:block" />

                {/* Mobile Hamburger Button */}
                <button
                  onClick={toggleMenu}
                  className="lg:hidden flex flex-col gap-1 p-2 transition-all duration-300 hover:bg-white/10 rounded-md group"
                  aria-label="Toggle menu"
                >
                  <span
                    className={`w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-[#316bb6] ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                  ></span>
                  <span
                    className={`w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-[#316bb6] ${isMenuOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-[#316bb6] ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  ></span>
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
              >
                <nav className="flex flex-col gap-4 py-4 border-t border-[#316bb6]/30 bg-gradient-to-b from-[#0e213a]/50 to-[#1a2c4a]/50 backdrop-blur-sm rounded-b-lg mx-2 mt-2">
                  <a
                    href="#produtos"
                    className="text-white no-underline text-sm font-normal transition-all duration-300 hover:text-[#316bb6] hover:bg-white/5 py-2 px-3 rounded-md mx-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("produtos")
                        ?.scrollIntoView({ behavior: "smooth" });
                      toggleMenu();
                    }}
                  >
                    {t("header.links.produto")}
                  </a>
                  <a
                    href="#dashboard"
                    className="text-[#316bb6] no-underline text-sm font-normal transition-all duration-300 bg-[#316bb6]/10 py-2 px-3 rounded-md mx-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("dashboard")
                        ?.scrollIntoView({ behavior: "smooth" });
                      toggleMenu();
                    }}
                  >
                    {t("header.links.plataforma")}
                  </a>
                  <a
                    href="#sobre"
                    className="text-white no-underline text-sm font-normal transition-all duration-300 hover:text-[#316bb6] hover:bg-white/5 py-2 px-3 rounded-md mx-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("sobre")
                        ?.scrollIntoView({ behavior: "smooth" });
                      toggleMenu();
                    }}
                  >
                    {t("header.links.sobre")}
                  </a>
                  <LanguageSwitcher isMobile={true} />
                </nav>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="pt-16 sm:pt-20 lg:pt-[120px] px-4 sm:px-6 lg:px-[57px] pb-16 sm:pb-20 lg:pb-[100px] relative min-h-screen overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover -z-10"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
            >
              <source src="/image/Video_banner.mp4" type="video/mp4" />
            </video>
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/40 -z-5"></div>
            <div className="max-w-full sm:max-w-[580px] lg:max-w-[623px]">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-tight sm:leading-normal mb-2 sm:mb-[10px] drop-shadow-lg">
                {t("hero.title")}
              </h1>
              <h2 className="text-[#316bb6] text-2xl sm:text-3xl md:text-4xl lg:text-[41px] font-bold leading-tight sm:leading-normal mb-8 sm:mb-12 lg:mb-[55px] drop-shadow-lg">
                <RotatingText />
              </h2>
              <p className="text-white text-sm sm:text-base lg:text-[17px] font-normal leading-6 sm:leading-7 lg:leading-[27.1px] mb-8 sm:mb-12 lg:mb-[55px] drop-shadow-sm whitespace-pre-line">
                {t("hero.description")}
              </p>
              <button
                className="mt-4 sm:mt-6 lg:mt-8 bg-[#316bb6] hover:bg-[#2a5c9f] text-white border-0 rounded-md py-2 sm:py-3 lg:py-[12px] px-4 sm:px-6 lg:px-[24px] text-sm sm:text-base lg:text-[15px] font-normal cursor-pointer transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto shadow-lg"
                style={{ backgroundColor: "#316bb6" }}
                onClick={() => {
                  window.open(
                    "https://wa.me/5511956394485?text=Olá! Gostaria de saber mais sobre os produtos da HastyDev.",
                    "_blank",
                  );
                }}
              >
                {t("hero.contact_cta")}
              </button>
            </div>
          </section>

          {/* Section 2 - Infinitas Possibilidades */}
          <section
            id="produtos"
            className="py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[50px] xl:px-[152px]"
          >
            <div className="max-w-[1304px] mx-auto">
              <ProductSection />
            </div>
          </section>

          {/* Spacing between sections */}
          <div className="h-12 sm:h-16 lg:h-[80px]"></div>

          {/* Section 3 - Por que a HastyDev */}
          <section
            id="sobre"
            className="py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[50px] xl:px-[152px]"
          >
            <div className="max-w-[1304px] mx-auto">
              <h2 className="text-center text-xl sm:text-2xl lg:text-[33px] font-normal leading-normal mb-12 sm:mb-16 lg:mb-[96px] mt-4 sm:mt-6 lg:mt-[32px]">
                {t("why_hastydev.title").includes("?") ? (
                  <>
                    <span className="text-[#3d83bd]">
                      {t("why_hastydev.title").split("?")[0]}
                    </span>
                    <span className="text-white">?</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#3d83bd]">
                      {t("why_hastydev.title").split(" ").slice(0, 2).join(" ")}
                    </span>
                    <span className="text-white">
                      {" "}
                      {t("why_hastydev.title").split(" ").slice(2).join(" ")}
                    </span>
                  </>
                )}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[54px]">
                <div className="w-full max-w-[390px] mx-auto lg:mx-0 lg:w-full min-h-[350px] sm:min-h-[380px] lg:min-h-[431px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[24px_28px] relative">
                  <div className="w-[60px] sm:w-[70px] h-[61px] sm:h-[71px] mb-4 sm:mb-[17px] relative">
                    <img
                      src="image/Vector Smart Object (6).png"
                      alt="Technology Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-white text-base sm:text-lg lg:text-[17px] font-normal leading-normal mb-4 sm:mb-6 lg:mb-[32px] mt-2 lg:mt-[8px]">
                      {t("why_hastydev.card1.title")}
                    </h3>
                    <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
                      {t("why_hastydev.card1.description")}
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[390px] mx-auto lg:mx-0 lg:w-full min-h-[350px] sm:min-h-[380px] lg:min-h-[431px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[24px_28px] relative">
                  <div className="w-[60px] sm:w-[70px] h-[61px] sm:h-[71px] mb-4 sm:mb-[17px] relative">
                    <img
                      src="/image/Vector Smart Object (4).png"
                      alt="Speed Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-white text-base sm:text-lg lg:text-[17px] font-normal leading-normal mb-4 sm:mb-6 lg:mb-[32px] mt-2 lg:mt-[8px]">
                      {t("why_hastydev.card2.title")}
                    </h3>
                    <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
                      {t("why_hastydev.card2.description")}
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-[390px] mx-auto lg:mx-0 lg:w-full min-h-[350px] sm:min-h-[380px] lg:min-h-[431px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[24px_28px] relative">
                  <div className="w-[60px] sm:w-[70px] h-[61px] sm:h-[71px] mb-4 sm:mb-[17px] relative">
                    <img
                      src="/image/Vector Smart Object (3).png"
                      alt="Connection Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-white text-base sm:text-lg lg:text-[17px] font-normal leading-normal mb-4 sm:mb-6 lg:mb-[32px] mt-2 lg:mt-[8px]">
                      {t("why_hastydev.card3.title")}
                    </h3>
                    <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
                      {t("why_hastydev.card3.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing between sections */}
          <div className="h-12 sm:h-16 lg:h-[80px]"></div>

          {/* Section 4 - Dashboard */}
          <section
            id="dashboard"
            className="py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[50px] xl:px-[152px]"
          >
            <div className="max-w-[1304px] mx-auto">
              <h2 className="text-center text-xl sm:text-2xl lg:text-[33px] font-normal leading-normal mb-12 sm:mb-16 lg:mb-[80px] mt-4 sm:mt-6 lg:mt-[32px]">
                <span className="text-[#316bb6]">
                  {t("dashboard.title").split(" ")[0]}{" "}
                  {t("dashboard.title").split(" ")[1]}
                </span>
                <span className="text-white">
                  {" "}
                  {t("dashboard.title").split(" ").slice(2).join(" ")}
                </span>
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[63px] items-start">
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[39px] flex-shrink-0 w-full lg:w-[350px] order-2 lg:order-1">
                  <div className="w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[30px]">
                    <h3 className="text-white text-sm sm:text-base lg:text-[15px] font-normal leading-normal mb-4 sm:mb-5 lg:mb-[21px]">
                      {t("dashboard.card1.title")}
                    </h3>
                    <p className="text-white text-xs sm:text-sm lg:text-[14px] font-normal leading-5 sm:leading-6 lg:leading-[21px]">
                      {t("dashboard.card1.description")}
                    </p>
                  </div>

                  <div className="w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[30px]">
                    <h3 className="text-white text-sm sm:text-base lg:text-[15px] font-normal leading-normal mb-4 sm:mb-5 lg:mb-[21px]">
                      {t("dashboard.card2.title")}
                    </h3>
                    <p className="text-white text-xs sm:text-sm lg:text-[14px] font-normal leading-5 sm:leading-6 lg:leading-[21px]">
                      {t("dashboard.card2.description")}
                    </p>
                  </div>

                  <div className="w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[30px]">
                    <h3 className="text-white text-sm sm:text-base lg:text-[15px] font-normal leading-normal mb-4 sm:mb-5 lg:mb-[21px]">
                      {t("dashboard.card3.title")}
                    </h3>
                    <p className="text-white text-xs sm:text-sm lg:text-[14px] font-normal leading-5 sm:leading-6 lg:leading-[21px]">
                      {t("dashboard.card3.description")}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex justify-center w-full order-1 lg:order-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a69030946afd7b560cac8724174f48335150b71?width=1726"
                    alt="Dashboard Preview"
                    className="w-full max-w-[600px] lg:max-w-[863px] h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Spacing between sections */}
          <div className="h-12 sm:h-16 lg:h-[80px]"></div>

          {/* Section 5 - Testimonials */}
          <section className="py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[51px]">
            <div className="max-w-[1480px] mx-auto">
              <h2 className="text-center text-xl sm:text-2xl lg:text-[33px] font-normal leading-normal mb-12 sm:mb-16 lg:mb-[96px] mt-4 sm:mt-6 lg:mt-[32px]">
                <span className="text-[#3d83bd]">
                  {t("testimonials.title").split(" ")[0]}{" "}
                  {t("testimonials.title").split(" ")[1]}
                </span>
                <span className="text-white">
                  {" "}
                  {t("testimonials.title").split(" ").slice(2).join(" ")}
                </span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[32px]">
                <div className="w-full max-w-[472px] mx-auto lg:mx-0 min-h-[350px] sm:min-h-[400px] lg:min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[34px] flex flex-col justify-between box-border">
                  <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mb-4 sm:mb-5 lg:mb-[20px] break-words flex-grow">
                    "A Hastydev entendeu exatamente o que a gente precisava e
                    foi muito ágil em entregar tudo funcionando. A automação com
                    contratos inteligentes usando o DEPIX melhorou nossas
                    conversões e tirou várias travas operacionais que a gente
                    tinha. Os relatórios deixaram tudo mais claro para nossos
                    parceiros e influenciadores, o que melhorou muito a relação
                    com eles. Foi um alívio contar com um time tão técnico e
                    direto ao ponto."
                  </p>
                  <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mt-auto flex-shrink-0">
                    — Equipe Alfredp2p
                  </p>
                </div>

                <div className="w-full max-w-[472px] mx-auto lg:mx-0 min-h-[350px] sm:min-h-[400px] lg:min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[34px] flex flex-col justify-between box-border">
                  <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mb-4 sm:mb-5 lg:mb-[20px] break-words flex-grow">
                    "Ficamos impressionados com os resultados do Alfred P2P após
                    a integração do DEPIX e a automação feita pela Hastydev. A
                    redução significativa nos MEDs foi um grande avanço, mas o
                    que realmente chamou nossa atenção foi o aumento no volume
                    de transações internamente. Isso não só melhorou a
                    eficiência da operação, como também se tornou um marco na
                    evolução da descentralização dos P2Ps. O trabalho da
                    Hastydev foi fundamental para trazer mais segurança,
                    escalabilidade e confiança para o ecossistema."
                  </p>
                  <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mt-auto flex-shrink-0">
                    — Equipe Eulen
                  </p>
                </div>

                <div className="w-full max-w-[472px] mx-auto lg:mx-0 min-h-[350px] sm:min-h-[400px] lg:min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[34px] flex flex-col justify-between box-border">
                  <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mb-4 sm:mb-5 lg:mb-[20px] break-words flex-grow">
                    "Foi impressionante ver como uma solução básica, que só
                    precisava ser estruturada corretamente, se transformou em um
                    sistema operacional de câmbio em cripto que nos colocou na
                    frente do mercado. A Hastydev fez isso acontecer de forma
                    ágil e com precisão. Além disso, o que realmente se destacou
                    foi o suporte contínuo e a consultoria que recebemos durante
                    todo o processo. Enquanto evoluímos o projeto, conseguimos
                    operacionalizar e lucrar ao mesmo tempo, o que tornou a
                    experiência ainda mais valiosa. Estamos muito satisfeitos
                    com o impacto positivo que a Hastydev teve no nosso
                    negócio."
                  </p>
                  <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mt-auto flex-shrink-0">
                    — Equipe pagueBit
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing between sections */}
          <div className="h-12 sm:h-16 lg:h-[80px]"></div>

          {/* Section 6 - Clients */}
          <section className="py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[50px] xl:px-[154px]">
            <div className="max-w-[1304px] mx-auto">
              <h2 className="text-center text-xl sm:text-2xl lg:text-[33px] font-normal leading-normal mb-12 sm:mb-16 lg:mb-[80px] mt-4 sm:mt-6 lg:mt-[32px]">
                <span className="text-[#3d83bd]">
                  {t("clients.title").split(" ")[0]}{" "}
                </span>
                <span className="text-white">
                  {t("clients.title").split(" ")[1]}
                </span>
              </h2>

              <div className="w-full max-w-[1274px] mx-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[109px] border-[2.778px] border-[#316bb6] rounded-xl flex items-center justify-center py-6 sm:py-8 lg:py-[12px] px-4 sm:px-6 lg:px-[15px]">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[30px] justify-center flex-wrap">
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-[7.25px] flex-shrink-0 min-w-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f45aea6b870d278c06a1d1140376ff19c57097?width=70"
                      alt="Strategy Mars"
                      className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-[30px] 2xl:w-[35px] h-4 sm:h-5 md:h-6 lg:h-7 xl:h-[30px] 2xl:h-[34px] mix-blend-luminosity flex-shrink-0"
                    />
                    <span className="text-white text-center font-[Cinzel] text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-[14px] 2xl:text-[15px] font-bold uppercase">
                      Strategy Mars
                    </span>
                  </div>

                  <img
                    src="/image/2024024_Logo_HASTYDEV_Horizontal_Negativo.png"
                    alt="HastyDev Logo"
                    className="h-auto max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-7 xl:max-h-[30px] 2xl:max-h-[35px] brightness-0 invert flex-shrink-0"
                  />

                  <img
                    src="/image/Logo_Alfred_2025_negativo.png"
                    alt="Alfred Logo"
                    className="h-auto max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-7 xl:max-h-[30px] 2xl:max-h-[35px] brightness-0 invert flex-shrink-0"
                  />

                  <img
                    src="/image/Vector Smart Object (2).png"
                    alt="Vector Smart Object Logo"
                    className="h-auto max-h-6 sm:max-h-7 md:max-h-8 lg:max-h-9 xl:max-h-[45px] 2xl:max-h-[50px] brightness-0 invert flex-shrink-0"
                  />

                  <img
                    src="/image/Logo-diy-sec-lab.png"
                    alt="Diy Sec Lab Logo"
                    className="h-auto max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-7 xl:max-h-[30px] 2xl:max-h-[35px] brightness-0 invert flex-shrink-0"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1468476f1b9f99fbcafec899491f7534a3768ad?width=246"
                    alt="PagueBit Logo"
                    className="h-auto max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-7 xl:max-h-[30px] 2xl:max-h-[35px] brightness-0 invert flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            id="contato"
            className="relative bg-gradient-to-br from-[#0e213a] via-[#1a2c4a] to-[#0e213a] pt-16 sm:pt-20 lg:pt-[80px] pb-8 sm:pb-10 lg:pb-[50px] mt-16 sm:mt-20 lg:mt-[100px] overflow-hidden"
          >
            {/* Footer Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(49,107,182,0.3) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            {/* Footer Background Image */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb06832d834ee8fce8a2ec639b899fa86237ede?width=3208"
              alt="Footer Background"
              className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[280px] lg:h-[339px] object-cover opacity-20 -z-10"
            />

            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-[50px] xl:px-[94px] relative z-10">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 lg:mb-16">
                {/* Company Info */}
                <div className="lg:col-span-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
                    alt="HastyDev Footer Logo"
                    className="w-[140px] sm:w-[160px] lg:w-[174px] h-auto mb-6 transition-all duration-300 hover:scale-105"
                  />
                  <p className="text-white/70 text-sm sm:text-base lg:text-[16px] font-normal leading-6 sm:leading-7 lg:leading-[24px] mb-6">
                    {t("footer.company_description")}
                  </p>

                  {/* Contact Button */}
                  <div className="mt-8">
                    <button
                      className="bg-[#316bb6] hover:bg-[#2a5c9f] text-white border-0 rounded-lg py-3 px-6 text-base font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      onClick={() => {
                        window.open(
                          "https://wa.me/5511956394485?text=Olá! Gostaria de saber mais sobre os produtos da HastyDev.",
                          "_blank",
                        );
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
                        </svg>
                        {t("footer.contact_button")}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
                    {t("footer.products_title")}
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#produtos"
                        className="text-white/80 hover:text-[#316bb6] transition-all duration-300 text-base font-medium cursor-pointer flex items-center gap-3 group py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("produtos")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#316bb6] rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                        HastyP2P Core
                      </a>
                    </li>
                    <li>
                      <a
                        href="#produtos"
                        className="text-white/80 hover:text-[#316bb6] transition-all duration-300 text-base font-medium cursor-pointer flex items-center gap-3 group py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("produtos")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#316bb6] rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                        HastyPay Engine
                      </a>
                    </li>
                    <li>
                      <a
                        href="#produtos"
                        className="text-white/80 hover:text-[#316bb6] transition-all duration-300 text-base font-medium cursor-pointer flex items-center gap-3 group py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("produtos")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#316bb6] rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                        HastyLegal Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#produtos"
                        className="text-white/80 hover:text-[#316bb6] transition-all duration-300 text-base font-medium cursor-pointer flex items-center gap-3 group py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("produtos")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#316bb6] rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                        HastyBrand Studio
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social & Links */}
                <div className="flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
                    {t("footer.connect_title")}
                  </h3>

                  {/* Social Media Links */}
                  <div className="flex gap-3 mb-6">
                    <a
                      href="http://instagram.com/hastydev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#E4405F] hover:to-[#C13584] hover:scale-110 hover:shadow-xl hover:-translate-y-1 group backdrop-blur-sm border border-white/10"
                      title="Siga no Instagram"
                    >
                      <svg
                        className="w-5 h-5 text-white transition-all duration-300 group-hover:scale-125"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/hastydev/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0077B5] hover:to-[#005E94] hover:scale-110 hover:shadow-xl hover:-translate-y-1 group backdrop-blur-sm border border-white/10"
                      title="Conecte no LinkedIn"
                    >
                      <svg
                        className="w-5 h-5 text-white transition-all duration-300 group-hover:scale-125"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>

                  {/* Decoration Image */}
                  <div className="mt-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76ed3d53a0b95966cfb1f1e42efdbb7851216083?width=254"
                      alt="Footer Decoration"
                      className="w-[60px] sm:w-[80px] lg:w-[100px] h-auto opacity-30 transition-opacity duration-300 hover:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="border-t border-white/10 pt-6 lg:pt-8">
                <div className="text-center">
                  <p className="text-white/50 text-sm">
                    {t("footer.copyright")}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom Overlay for better contrast */}
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 lg:h-[100px] bg-gradient-to-t from-[#0e213a] to-transparent -z-5"></div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Homepage;
