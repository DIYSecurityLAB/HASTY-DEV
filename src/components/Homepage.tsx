import { useState } from "react";
import SEO from "./SEO";

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <SEO />
      <div className="w-full min-h-screen bg-[#01010d] text-white font-[Inter] relative overflow-x-hidden">
        {/* Background Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#01010d] -z-20"></div>

        {/* Radial Glow Background */}
        <div
          className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
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
        <header className="fixed top-0 left-0 right-0 bg-[#0e213a] z-[1000] py-3 lg:py-[15px] h-auto lg:h-[90px] flex items-center">
          <div className="max-w-[1580px] mx-auto px-4 sm:px-[20px] lg:px-[54px] w-full">
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
                  className="cursor-pointer"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
                    alt="HastyDev Logo"
                    className="h-6 lg:h-[26px] w-auto hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-[135px] items-center">
                <a
                  href="#produtos"
                  className="text-white no-underline text-[15px] font-normal transition-colors duration-300 hover:text-[#316bb6]"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("produtos")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Produto
                </a>
                <a
                  href="#dashboard"
                  className="text-[#316bb6] no-underline text-[15px] font-normal transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("dashboard")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Plataforma
                </a>
                <a
                  href="#sobre"
                  className="text-white no-underline text-[15px] font-normal transition-colors duration-300 hover:text-[#316bb6]"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("sobre")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Sobre
                </a>
              </nav>

              {/* Desktop Language Selector */}
              <div className="hidden lg:flex items-center gap-1 py-[5.5px] pr-[10.934px] pb-[4.5px] pl-0">
                <span className="text-white text-[9px] font-normal">
                  Português (Brasil)
                </span>
                <svg
                  className="w-[6px] h-[3px]"
                  width="8"
                  height="7"
                  viewBox="0 0 8 7"
                  fill="none"
                >
                  <path
                    d="M1.51001 1.35181L4.28821 4.68541L7.06641 1.35181"
                    stroke="white"
                    strokeWidth="2.22253"
                  />
                </svg>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col gap-1 p-2 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
            >
              <nav className="flex flex-col gap-4 py-4 border-t border-white/10">
                <a
                  href="#produtos"
                  className="text-white no-underline text-sm font-normal transition-colors duration-300 hover:text-[#316bb6] py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("produtos")
                      ?.scrollIntoView({ behavior: "smooth" });
                    toggleMenu();
                  }}
                >
                  Produto
                </a>
                <a
                  href="#dashboard"
                  className="text-[#316bb6] no-underline text-sm font-normal transition-colors duration-300 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("dashboard")
                      ?.scrollIntoView({ behavior: "smooth" });
                    toggleMenu();
                  }}
                >
                  Plataforma
                </a>
                <a
                  href="#sobre"
                  className="text-white no-underline text-sm font-normal transition-colors duration-300 hover:text-[#316bb6] py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("sobre")
                      ?.scrollIntoView({ behavior: "smooth" });
                    toggleMenu();
                  }}
                >
                  Sobre
                </a>
                <div className="flex items-center gap-1 py-2 border-t border-white/10 mt-2">
                  <span className="text-white text-xs font-normal">
                    Português (Brasil)
                  </span>
                  <svg
                    className="w-[6px] h-[3px]"
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                  >
                    <path
                      d="M1.51001 1.35181L4.28821 4.68541L7.06641 1.35181"
                      stroke="white"
                      strokeWidth="2.22253"
                    />
                  </svg>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="pt-24 sm:pt-32 lg:pt-[254px] px-4 sm:px-6 lg:px-[57px] pb-16 sm:pb-20 lg:pb-[100px] relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/Layer 35 (1).png')" }}
        >
          <div className="max-w-full sm:max-w-[580px] lg:max-w-[623px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-normal leading-tight sm:leading-normal mb-2 sm:mb-[10px] drop-shadow-lg">
              Kits de Incorporação para
            </h1>
            <h2 className="text-[#316bb6] text-xl sm:text-2xl md:text-3xl lg:text-[41px] font-normal leading-tight sm:leading-normal mb-8 sm:mb-12 lg:mb-[55px] drop-shadow-lg">
              P2P Core
            </h2>
            <p className="text-white text-sm sm:text-base lg:text-[17px] font-normal leading-6 sm:leading-7 lg:leading-[27.1px] mb-8 sm:mb-12 lg:mb-[55px] drop-shadow-sm">
              A Hastydev transforma sua ideia em realidade no universo cripto,
              com um pacote completo que une jurídico, marketing e tecnologia.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Seja você um investidor ou builder, estruturamos sua entidade
              legal em uma jurisdição estratégica, garantindo segurança e
              conformidade para empreender no mercado descentralizado.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Comece a construir com confiança — a partir de qualquer lugar do
              mundo, com o suporte que você precisa para crescer no Web3.
            </p>
            <button
              className="mt-4 sm:mt-6 lg:mt-8 bg-[#316bb6] hover:bg-[#2a5c9f] text-white border-0 rounded-md py-2 sm:py-3 lg:py-[12px] px-4 sm:px-6 lg:px-[24px] text-sm sm:text-base lg:text-[15px] font-normal cursor-pointer transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto shadow-lg"
              style={{ backgroundColor: "#316bb6" }}
              onClick={() => {
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entre em contato conosco
            </button>
          </div>
        </section>

        {/* Section 2 - Infinitas Possibilidades */}
        <section
          id="produtos"
          className="py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[50px] xl:px-[152px]"
        >
          <div className="max-w-[1304px] mx-auto">
            <h2 className="text-center text-lg sm:text-xl lg:text-[24px] font-normal leading-normal uppercase mb-8 sm:mb-10 lg:mb-[48px]">
              <span className="text-white">Infinitas </span>
              <span className="text-[#3d83bd]">possibilidades</span>
            </h2>
            <h3 className="text-white text-center text-xl sm:text-2xl lg:text-[33px] font-normal leading-normal mb-12 sm:mb-16 lg:mb-[120px]">
              Produtos para todas as suas necessidades
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-[20px] xl:gap-[64px] mb-12 sm:mb-16 lg:mb-[106px] justify-items-center">
              <div className="flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-full lg:w-[277px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-sm sm:text-lg lg:text-[24px] font-normal cursor-pointer transition-all duration-300 bg-[rgba(62,132,190,0.2)] px-4">
                HastyP2P Core
              </div>
              <div className="flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-full lg:w-[277px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-sm sm:text-lg lg:text-[24px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)] px-4">
                HastyPay Engine
              </div>
              <div className="flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-full lg:w-[277px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-sm sm:text-lg lg:text-[24px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)] px-4">
                HastyLegal Guide
              </div>
              <div className="flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-full lg:w-[277px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-sm sm:text-lg lg:text-[24px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)] px-4">
                HastyBrand Studio
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[78px] items-start">
              <div className="product-info w-full lg:flex-1 lg:max-w-[529px] order-2 lg:order-1">
                <h3 className="text-white text-xl sm:text-2xl lg:text-[34px] font-normal leading-normal mb-6 sm:mb-8 lg:mb-[56px]">
                  <span className="text-[#3d83bd]">HastyP2P</span> Core
                </h3>
                <div className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[26.9px] space-y-4">
                  <div>
                    <strong>Objetivo:</strong>
                    <br />
                    Automatize sua operação P2P com contratos inteligentes,
                    eliminando intermediários e reduzindo riscos como MEs.
                  </div>
                  <div>
                    <strong>Operação:</strong>
                    <br />
                    Solução white-label e modular, adaptável ao seu negócio, com
                    liquidez, segurança e contratos inteligentes orquestrados.
                  </div>
                  <div>
                    <strong>Desenvolvedor:</strong>
                    <br />
                    Time Web3 da Hastydev, especialista em automação cripto,
                    integração com carteiras e backends seguros.
                  </div>
                  <div>
                    <strong>Tempo:</strong>
                    <br />
                    Contagem regressiva, grupo colaborativo e rede de
                    profissionais para execução ágil e alinhada com seu escopo.
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end w-full lg:flex-1 order-1 lg:order-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0d8eb7396fb9eccbf1b3ccc22239a60437c2f71?width=1392"
                  alt="HastyP2P Core"
                  className="w-full max-w-[500px] lg:max-w-[696px] h-auto rounded-lg object-cover"
                />
              </div>
            </div>
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
              <span className="text-[#3d83bd]">Por que</span>
              <span className="text-white"> a HastyDev?</span>
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
                    Tecnologia de ponta a ponta para o universo Web3
                  </h3>
                  <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
                    A Hastydev entrega soluções completas — do contrato
                    inteligente ao design da sua marca. Combinamos engenharia,
                    jurídico, UX e cripto em um só fluxo, pronto para
                    transformar ideias em produtos escaláveis no ecossistema
                    descentralizado.
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
                    Velocidade de execução com precisão cirúrgica
                  </h3>
                  <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
                    No mercado Web3, mover rápido é essencial. Nossos times
                    trabalham com entregas coordenadas, cronogramas visíveis e
                    grupos ativos de projeto para garantir que você receba
                    exatamente o que precisa, no tempo certo e sem retrabalho.
                    Tudo com a agilidade que empresas de tecnologia exigem.
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
                    Conexão direta com o ecossistema cripto real
                  </h3>
                  <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
                    Mais do que prestadores, somos parte ativa do mercado Web3.
                    Ao entrar com a Hastydev, você acessa um ambiente
                    colaborativo com devs, juristas, designers e fundadores —
                    criando um networking instantâneo e estratégico para crescer
                    com base em experiência real.
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
              <span className="text-[#316bb6]">Um painel</span>
              <span className="text-white"> para todas as suas atividades</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[63px] items-start">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[39px] flex-shrink-0 w-full lg:w-[350px] order-2 lg:order-1">
                <div className="w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[30px]">
                  <h3 className="text-white text-sm sm:text-base lg:text-[15px] font-normal leading-normal mb-4 sm:mb-5 lg:mb-[21px]">
                    Crie seus Cupons para Promoções
                  </h3>
                  <p className="text-white text-xs sm:text-sm lg:text-[14px] font-normal leading-5 sm:leading-6 lg:leading-[21px]">
                    Gere cupons personalizados direto na plataforma e aumente
                    suas conversões com incentivos inteligentes. Promoções com
                    cripto, na palma da sua mão.
                  </p>
                </div>

                <div className="w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[30px]">
                  <h3 className="text-white text-sm sm:text-base lg:text-[15px] font-normal leading-normal mb-4 sm:mb-5 lg:mb-[21px]">
                    Acompanhe o Desempenho em Tempo Real
                  </h3>
                  <p className="text-white text-xs sm:text-sm lg:text-[14px] font-normal leading-5 sm:leading-6 lg:leading-[21px]">
                    Visualize conversões, volume de vendas e uso de cupons com
                    total transparência. Mais controle, menos adivinhação.
                  </p>
                </div>

                <div className="w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[30px]">
                  <h3 className="text-white text-sm sm:text-base lg:text-[15px] font-normal leading-normal mb-4 sm:mb-5 lg:mb-[21px]">
                    Dashboard feito para o Lojista
                  </h3>
                  <p className="text-white text-xs sm:text-sm lg:text-[14px] font-normal leading-5 sm:leading-6 lg:leading-[21px]">
                    Tudo o que você precisa para gerenciar pagamentos e
                    promoções em um só lugar. Fácil de usar, pronto pra escalar.
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
              <span className="text-[#3d83bd]">O que</span>
              <span className="text-white">
                {" "}
                nossos usuários dizem sobre nós
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[32px]">
              <div className="w-full max-w-[472px] mx-auto lg:mx-0 min-h-[350px] sm:min-h-[400px] lg:min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-5 sm:p-6 lg:p-[34px] flex flex-col justify-between box-border">
                <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[27px] mb-4 sm:mb-5 lg:mb-[20px] break-words flex-grow">
                  "A Hastydev entendeu exatamente o que a gente precisava e foi
                  muito ágil em entregar tudo funcionando. A automação com
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
                  "Ficamos impressionados com os resultados do Alfred P2P após a
                  integração do DEPIX e a automação feita pela Hastydev. A
                  redução significativa nos MEDs foi um grande avanço, mas o que
                  realmente chamou nossa atenção foi o aumento no volume de
                  transações internamente. Isso não só melhorou a eficiência da
                  operação, como também se tornou um marco na evolução da
                  descentralização dos P2Ps. O trabalho da Hastydev foi
                  fundamental para trazer mais segurança, escalabilidade e
                  confiança para o ecossistema."
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
                  frente do mercado. A Hastydev fez isso acontecer de forma ágil
                  e com precisão. Além disso, o que realmente se destacou foi o
                  suporte contínuo e a consultoria que recebemos durante todo o
                  processo. Enquanto evoluímos o projeto, conseguimos
                  operacionalizar e lucrar ao mesmo tempo, o que tornou a
                  experiência ainda mais valiosa. Estamos muito satisfeitos com
                  o impacto positivo que a Hastydev teve no nosso negócio."
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
              <span className="text-[#3d83bd]">Nossos </span>
              <span className="text-white">clientes</span>
            </h2>

            <div className="w-full max-w-[1274px] mx-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[109px] border-[2.778px] border-[#316bb6] rounded-xl flex items-center justify-center py-4 sm:py-5 lg:py-[3.364px] px-4 sm:px-6 lg:px-[10px]">
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-[30px] xl:gap-[60px] justify-center flex-wrap">
                <div className="flex items-center gap-2 lg:gap-[7.25px] flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f45aea6b870d278c06a1d1140376ff19c57097?width=70"
                    alt="Strategy Mars"
                    className="w-6 sm:w-8 lg:w-[35px] h-6 sm:h-8 lg:h-[34px] mix-blend-luminosity"
                  />
                  <span className="text-white text-center font-[Cinzel] text-xs sm:text-sm lg:text-[15px] font-bold uppercase whitespace-nowrap">
                    Strategy Mars
                  </span>
                </div>

                <img
                  src="/image/2024024_Logo_HASTYDEV_Horizontal_Negativo.png"
                  alt="HastyDev Logo"
                  className="h-auto max-h-6 sm:max-h-8 lg:max-h-[35px] brightness-0 invert flex-shrink-0"
                />

                <img
                  src="/image/Logo_Alfred_2025_negativo.png"
                  alt="Alfred Logo"
                  className="h-auto max-h-6 sm:max-h-8 lg:max-h-[35px] brightness-0 invert flex-shrink-0"
                />

                <img
                  src="/image/Logo-diy-sec-lab.png"
                  alt="Diy Sec Lab Logo"
                  className="h-auto max-h-6 sm:max-h-8 lg:max-h-[35px] brightness-0 invert flex-shrink-0"
                />

                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1468476f1b9f99fbcafec899491f7534a3768ad?width=246"
                  alt="PagueBit Logo"
                  className="h-auto max-h-6 sm:max-h-8 lg:max-h-[35px] brightness-0 invert flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contato"
          className="relative bg-[#0e213a] pt-12 sm:pt-16 lg:pt-[70px] pb-6 sm:pb-8 lg:pb-[40px] mt-16 sm:mt-20 lg:mt-[100px] overflow-hidden"
        >
          {/* Footer Background Image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb06832d834ee8fce8a2ec639b899fa86237ede?width=3208"
            alt="Footer Background"
            className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[280px] lg:h-[339px] object-cover -z-10"
          />

          <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-[50px] xl:px-[94px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-8 sm:gap-10 lg:gap-[60px] xl:gap-[94px] items-start">
              {/* Left Column - Logo and Description */}
              <div className="footer-left text-center lg:text-left">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
                  alt="HastyDev Footer Logo"
                  className="w-[140px] sm:w-[160px] lg:w-[174px] h-auto mb-6 sm:mb-8 lg:mb-[77px] mx-auto lg:mx-0"
                />
                <p className="text-white text-sm sm:text-base lg:text-lg xl:text-[20px] font-normal leading-6 sm:leading-7 lg:leading-8 xl:leading-[32px] opacity-[0.59]">
                  Especialistas em transformar ideias em realidade no universo
                  Web3. Oferecemos soluções completas que integram tecnologia,
                  jurídico e marketing para criar produtos escaláveis no
                  ecossistema descentralizado. Sua jornada no mundo cripto
                  começa aqui.
                </p>
              </div>

              {/* Center Column - Additional Content */}
              <div className="footer-center text-center lg:text-left">
                <p className="text-white text-sm sm:text-base lg:text-lg xl:text-[20px] font-normal leading-6 sm:leading-7 lg:leading-8 xl:leading-[30.6px] opacity-[0.59] mt-0 lg:mt-[105px]">
                  Automação P2P com contratos inteligentes
                  <br className="hidden lg:block" />
                  <br className="hidden lg:block" />
                  Incorporação em jurisdições estratégicas
                  <br className="hidden lg:block" />
                  <br className="hidden lg:block" />
                  Networking ativo no mercado Web3
                </p>
              </div>

              {/* Right Column - Decoration and Social Links */}
              <div className="footer-right flex flex-col items-center lg:items-end justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                {/* Decoration Image */}
                <div className="decoration-image mb-6 sm:mb-8 lg:mb-[47px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76ed3d53a0b95966cfb1f1e42efdbb7851216083?width=254"
                    alt="Footer Decoration"
                    className="w-[80px] sm:w-[100px] lg:w-[127px] h-auto opacity-[0.45]"
                  />
                </div>

                {/* Social Media Links */}
                <div className="social-links flex gap-4 sm:gap-5 lg:gap-[20px]">
                  <a
                    href="http://instagram.com/hastydev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:opacity-70"
                  >
                    <svg
                      className="w-6 sm:w-7 lg:w-[30px] h-6 sm:h-7 lg:h-[30px] text-white"
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
                    className="transition-all duration-300 hover:opacity-70"
                  >
                    <svg
                      className="w-6 sm:w-7 lg:w-[30px] h-6 sm:h-7 lg:h-[30px] text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Overlay for better contrast */}
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 lg:h-[100px] bg-gradient-to-t from-[#0e213a] to-transparent -z-5"></div>
        </footer>
      </div>
    </>
  );
}

export default Homepage;
