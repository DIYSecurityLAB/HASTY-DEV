import * as React from "react";

function Homepage() {
  return (
    <div className="w-full min-h-screen bg-[#01010d] text-white font-[Inter] relative overflow-x-hidden">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#01010d] -z-20"></div>

      {/* Circuit Background */}
      <div className="absolute -top-32 -left-0.5 w-[1580px] h-[789px] -z-10">
        <div className="relative w-full h-full bg-[#d9d9d9]">
          <div className="absolute top-[216px] left-[224px] w-[1357px] h-[573px] bg-white"></div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e813f8e15d799c4c8651e01a46f7898f9ebe1d20?width=3108"
            alt=""
            className="absolute top-[114px] -left-1 w-[1554px] h-[786px] opacity-[0.5686] mix-blend-multiply"
          />
        </div>
      </div>

      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-[#0e213a] z-[1000] py-[15px] h-[90px] flex items-center">
        <div className="max-w-[1580px] mx-auto px-[54px] lg:px-[54px] md:px-[20px] sm:px-[20px] flex items-center justify-between w-full flex-col lg:flex-row gap-4 lg:gap-0">
          <div className="logo-section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
              alt="HastyDev Logo"
              className="h-[26px] w-[160px]"
            />
          </div>
          <nav className="flex gap-[135px] lg:gap-[135px] md:gap-[40px] sm:gap-[20px] items-center">
            <a
              href="#produto"
              className="text-white no-underline text-[15px] md:text-[12px] font-normal transition-colors duration-300 hover:text-[#316bb6]"
            >
              Produto
            </a>
            <a
              href="#plataforma"
              className="text-[#316bb6] no-underline text-[15px] md:text-[12px] font-normal transition-colors duration-300"
            >
              Plataforma
            </a>
            <a
              href="#sobre"
              className="text-white no-underline text-[15px] md:text-[12px] font-normal transition-colors duration-300 hover:text-[#316bb6]"
            >
              Sobre
            </a>
          </nav>
          <div className="flex items-center gap-1 py-[5.5px] pr-[10.934px] pb-[4.5px] pl-0">
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
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-[254px] pl-[57px] md:pl-[20px] sm:pl-[20px] pr-[20px] pb-[100px] md:pb-[50px] relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/Layer 35 (1).png')" }}
      >
        <div className="max-w-[623px]">
          <h1 className="text-white text-[46px] md:text-[32px] sm:text-[24px] font-normal leading-normal mb-[10px] drop-shadow-lg">
            Kits de Incorporação para
          </h1>
          <h2 className="text-white text-[41px] md:text-[28px] sm:text-[20px] font-normal leading-normal mb-[55px] drop-shadow-lg">
            P2P Core
          </h2>
          <p className="text-white text-[17px] md:text-[14px] sm:text-[14px] font-normal leading-[27.1px] md:leading-[20px] mb-[55px] drop-shadow-sm">
            A Hastydev transforma sua ideia em realidade no universo cripto, com
            um pacote completo que une jurídico, marketing e tecnologia.
            <br />
            <br />
            Seja você um investidor ou builder, estruturamos sua entidade legal
            em uma jurisdição estratégica, garantindo segurança e conformidade
            para empreender no mercado descentralizado.
            <br />
            <br />
            Comece a construir com confiança — a partir de qualquer lugar do
            mundo, com o suporte que você precisa para crescer no Web3.
          </p>
          <button className="bg-[#316bb6] text-white border-none rounded-md py-[15px] px-[30px] text-[15px] font-normal cursor-pointer transition-all duration-300 hover:bg-[#2a5c9f] hover:-translate-y-0.5">
            Entre em contato conosco
          </button>
        </div>
      </section>

      {/* Section 2 - Infinitas Possibilidades */}
      <section className="py-[100px] md:py-[50px] px-[152px] lg:px-[50px] md:px-[20px]">
        <div className="max-w-[1304px] mx-auto">
          <h2 className="text-center text-[24px] font-normal leading-normal uppercase mb-[30px]">
            <span className="text-white">Infinitas </span>
            <span className="text-[#3d83bd]">possibilidades</span>
          </h2>
          <h3 className="text-white text-center text-[33px] md:text-[24px] font-normal leading-normal mb-[184px] md:mb-[60px]">
            Produtos para todas as suas necessidades
          </h3>

          <div className="flex justify-center gap-[64px] lg:gap-[20px] md:flex-wrap md:gap-[20px] mb-[106px] md:mb-[40px]">
            <div className="flex items-center justify-center w-[277px] md:w-[200px] sm:w-full sm:max-w-[280px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-[24px] md:text-[18px] font-normal cursor-pointer transition-all duration-300 bg-[rgba(62,132,190,0.2)]">
              HastyP2P Core
            </div>
            <div className="flex items-center justify-center w-[277px] md:w-[200px] sm:w-full sm:max-w-[280px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-[24px] md:text-[18px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)]">
              HastyPay Engine
            </div>
            <div className="flex items-center justify-center w-[277px] md:w-[200px] sm:w-full sm:max-w-[280px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-[24px] md:text-[18px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)]">
              HastyLegal Guide
            </div>
            <div className="flex items-center justify-center w-[277px] md:w-[200px] sm:w-full sm:max-w-[280px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-[24px] md:text-[18px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)]">
              HastyBrand Studio
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-[78px] md:gap-[40px] items-start">
            <div className="product-info">
              <h3 className="text-white text-[34px] font-normal leading-normal mb-[43px]">
                <span className="text-[#3d83bd]">HastyP2P</span> Core
              </h3>
              <div className="text-white text-[18px] font-normal leading-[26.9px]">
                <strong>Objetivo:</strong>
                <br />
                Automatize sua operação P2P com contratos inteligentes,
                eliminando intermediários e reduzindo riscos como MEs.
                <br />
                <br />
                <strong>Operação:</strong>
                <br />
                Solução white-label e modular, adaptável ao seu negócio, com
                liquidez, segurança e contratos inteligentes orquestrados.
                <br />
                <br />
                <strong>Desenvolvedor:</strong>
                <br />
                Time Web3 da Hastydev, especialista em automação cripto,
                integração com carteiras e backends seguros.
                <br />
                <br />
                <strong>Tempo:</strong>
                <br />
                Contagem regressiva, grupo colaborativo e rede de profissionais
                para execução ágil e alinhada com seu escopo.
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/image/imagem-btc.png"
                alt="HastyP2P Core"
                className="w-[696px] h-[435px] md:w-full md:h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Por que a HastyDev */}
      <section className="py-[100px] md:py-[50px] px-[152px] lg:px-[50px] md:px-[20px]">
        <div className="max-w-[1304px] mx-auto">
          <h2 className="text-center text-[33px] font-normal leading-normal mb-[83px] md:mb-[40px]">
            <span className="text-[#3d83bd]">Por que</span>
            <span className="text-white"> a HastyDev?</span>
          </h2>

          <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-[54px] md:gap-[30px]">
            <div className="w-[390px] md:w-full h-[431px] md:h-auto md:min-h-[300px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[24px_28px] md:p-[20px] relative">
              <div className="w-[70px] h-[71px] mb-[17px] relative">
                <img
                  src="image/Vector Smart Object (6).png"
                  alt="Technology Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="content">
                <h3 className="text-white text-[17px] font-normal leading-normal mb-[24px]">
                  Tecnologia de ponta a ponta para o universo Web3
                </h3>
                <p className="text-white text-[16px] font-normal leading-[24px]">
                  A Hastydev entrega soluções completas — do contrato
                  inteligente ao design da sua marca. Combinamos engenharia,
                  jurídico, UX e cripto em um só fluxo, pronto para transformar
                  ideias em produtos escaláveis no ecossistema descentralizado.
                </p>
              </div>
            </div>

            <div className="w-[390px] md:w-full h-[431px] md:h-auto md:min-h-[300px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[24px_28px] md:p-[20px] relative">
              <div className="w-[70px] h-[71px] mb-[17px] relative">
                <img
                  src="/image/Vector Smart Object (4).png"
                  alt="Speed Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="content">
                <h3 className="text-white text-[17px] font-normal leading-normal mb-[24px]">
                  Velocidade de execução com precisão cirúrgica
                </h3>
                <p className="text-white text-[16px] font-normal leading-[24px]">
                  No mercado Web3, mover rápido é essencial. Nossos times
                  trabalham com entregas coordenadas, cronogramas visíveis e
                  grupos ativos de projeto para garantir que você receba
                  exatamente o que precisa, no tempo certo e sem retrabalho.
                  Tudo com a agilidade que empresas de tecnologia exigem.
                </p>
              </div>
            </div>

            <div className="w-[390px] md:w-full h-[431px] md:h-auto md:min-h-[300px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[24px_28px] md:p-[20px] relative">
              <div className="w-[70px] h-[71px] mb-[17px] relative">
                <img
                  src="/image/Vector Smart Object (3).png"
                  alt="Connection Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="content">
                <h3 className="text-white text-[17px] font-normal leading-normal mb-[24px]">
                  Conexão direta com o ecossistema cripto real
                </h3>
                <p className="text-white text-[16px] font-normal leading-[24px]">
                  Mais do que prestadores, somos parte ativa do mercado Web3. Ao
                  entrar com a Hastydev, você acessa um ambiente colaborativo
                  com devs, juristas, designers e fundadores — criando um
                  networking instantâneo e estratégico para crescer com base em
                  experiência real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Dashboard */}
      <section className="py-[100px] md:py-[50px] px-[152px] lg:px-[50px] md:px-[20px]">
        <div className="max-w-[1304px] mx-auto">
          <h2 className="text-center text-[33px] font-normal leading-normal mb-[135px] md:mb-[40px]">
            <span className="text-[#316bb6]">Um painel</span>
            <span className="text-white"> para todas as suas atividades</span>
          </h2>

          <div className="grid grid-cols-[350px_1fr] md:grid-cols-1 gap-[63px] md:gap-[40px]">
            <div className="flex flex-col gap-[39px] md:gap-[30px]">
              <div className="w-[350px] md:w-full h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[30px] md:p-[20px]">
                <h3 className="text-white text-[15px] font-normal leading-normal mb-[21px]">
                  Crie seus Cupons para Promoções
                </h3>
                <p className="text-white text-[14px] font-normal leading-[21px]">
                  Gere cupons personalizados direto na plataforma e aumente suas
                  conversões com incentivos inteligentes. Promoções com cripto,
                  na palma da sua mão.
                </p>
              </div>

              <div className="w-[350px] md:w-full h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[30px] md:p-[20px]">
                <h3 className="text-white text-[15px] font-normal leading-normal mb-[21px]">
                  Acompanhe o Desempenho em Tempo Real
                </h3>
                <p className="text-white text-[14px] font-normal leading-[21px]">
                  Visualize conversões, volume de vendas e uso de cupons com
                  total transparência. Mais controle, menos adivinhação.
                </p>
              </div>

              <div className="w-[350px] md:w-full h-[167px] bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[30px] md:p-[20px]">
                <h3 className="text-white text-[15px] font-normal leading-normal mb-[21px]">
                  Dashboard feito para o Lojista
                </h3>
                <p className="text-white text-[14px] font-normal leading-[21px]">
                  Tudo o que você precisa para gerenciar pagamentos e promoções
                  em um só lugar. Fácil de usar, pronto pra escalar.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a69030946afd7b560cac8724174f48335150b71?width=1726"
                alt="Dashboard Preview"
                className="w-[863px] h-[557px] md:w-full md:h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Testimonials */}
      <section className="py-[100px] px-[51px]">
        <div className="max-w-[1480px] mx-auto">
          <h2 className="text-center text-[33px] font-normal leading-normal mb-[84px]">
            <span className="text-[#3d83bd]">O que</span>
            <span className="text-white"> nossos usuários dizem sobre nós</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
            <div className="w-full max-w-[472px] min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[34px] flex flex-col justify-between box-border">
              <p className="text-white text-[18px] font-normal leading-[27px] mb-[20px] break-words flex-grow">
                "A Hastydev entendeu exatamente o que a gente precisava e foi
                muito ágil em entregar tudo funcionando. A automação com
                contratos inteligentes usando o DEPIX melhorou nossas conversões
                e tirou várias travas operacionais que a gente tinha. Os
                relatórios deixaram tudo mais claro para nossos parceiros e
                influenciadores, o que melhorou muito a relação com eles. Foi um
                alívio contar com um time tão técnico e direto ao ponto."
              </p>
              <p className="text-white text-[18px] font-normal leading-[27px] mt-auto flex-shrink-0">
                — Equipe Alfredp2p
              </p>
            </div>

            <div className="w-full max-w-[472px] min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[34px] flex flex-col justify-between box-border">
              <p className="text-white text-[18px] font-normal leading-[27px] mb-[20px] break-words flex-grow">
                "Ficamos impressionados com os resultados do Alfred P2P após a
                integração do DEPIX e a automação feita pela Hastydev. A redução
                significativa nos MEDs foi um grande avanço, mas o que realmente
                chamou nossa atenção foi o aumento no volume de transações
                internamente. Isso não só melhorou a eficiência da operação,
                como também se tornou um marco na evolução da descentralização
                dos P2Ps. O trabalho da Hastydev foi fundamental para trazer
                mais segurança, escalabilidade e confiança para o ecossistema."
              </p>
              <p className="text-white text-[18px] font-normal leading-[27px] mt-auto flex-shrink-0">
                — Equipe Eulen
              </p>
            </div>

            <div className="w-full max-w-[472px] min-h-[467px] h-auto bg-gradient-to-br from-[#0e213a] via-[#0e213a] to-[rgba(255,255,255,0.1)] border-[2.223px] border-[#316bb6] rounded-xl p-[34px] flex flex-col justify-between box-border">
              <p className="text-white text-[18px] font-normal leading-[27px] mb-[20px] break-words flex-grow">
                "Foi impressionante ver como uma solução básica, que só
                precisava ser estruturada corretamente, se transformou em um
                sistema operacional de câmbio em cripto que nos colocou na
                frente do mercado. A Hastydev fez isso acontecer de forma ágil e
                com precisão. Além disso, o que realmente se destacou foi o
                suporte contínuo e a consultoria que recebemos durante todo o
                processo. Enquanto evoluímos o projeto, conseguimos
                operacionalizar e lucrar ao mesmo tempo, o que tornou a
                experiência ainda mais valiosa. Estamos muito satisfeitos com o
                impacto positivo que a Hastydev teve no nosso negócio."
              </p>
              <p className="text-white text-[18px] font-normal leading-[27px] mt-auto flex-shrink-0">
                — Equipe pagueBit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Clients */}
      <section className="py-[100px] md:py-[50px] px-[154px] lg:px-[50px] md:px-[20px]">
        <div className="max-w-[1304px] mx-auto">
          <h2 className="text-center text-[33px] font-normal leading-normal mb-[70px] md:mb-[40px]">
            <span className="text-[#3d83bd]">Nossos </span>
            <span className="text-white">clientes</span>
          </h2>

          <div className="w-[1274px] md:w-full h-[109px] border-[2.778px] border-[#316bb6] rounded-xl flex items-center justify-center py-[3.364px] px-[2.523px_2.404px] md:px-[10px]">
            <div className="flex items-center gap-[60px] md:gap-[30px] justify-center flex-wrap">
              <div className="flex items-center gap-[7.25px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f45aea6b870d278c06a1d1140376ff19c57097?width=70"
                  alt="Strategy Mars"
                  className="w-[35px] h-[34px] mix-blend-luminosity"
                />
                <span className="text-white text-center font-[Cinzel] text-[15px] font-bold uppercase">
                  Strategy Mars
                </span>
              </div>

              <img
                src="/image/2024024_Logo_HASTYDEV_Horizontal_Negativo.png"
                alt="HastyDev Logo"
                className="h-auto max-h-[35px] brightness-0 invert"
              />

              <img
                src="/image/Logo_Alfred_2025_negativo.png"
                alt="Alfred Logo"
                className="h-auto max-h-[35px] brightness-0 invert"
              />

              <img
                src="/image/Logo-diy-sec-lab.png"
                alt="Diy Sec Lab Logo"
                className="h-auto max-h-[35px] brightness-0 invert"
              />

              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1468476f1b9f99fbcafec899491f7534a3768ad?width=246"
                alt="DIY Sec Lab Logo"
                className="h-auto max-h-[35px] brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0e213a] pt-[69px] pb-[20px] mt-[100px] md:mt-[50px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb06832d834ee8fce8a2ec639b899fa86237ede?width=3208"
          alt="Footer Background"
          className="absolute bottom-0 left-0 w-full h-[339px] object-cover -z-10"
        />

        <div className="max-w-[1480px] mx-auto px-[94px] lg:px-[50px] md:px-[20px]">
          <div className="grid grid-cols-[357px_339px_1fr] md:grid-cols-1 gap-[60px] md:gap-[40px] items-start md:text-center">
            <div className="footer-left">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
                alt="HastyDev Footer Logo"
                className="w-[174px] h-[28px] mb-[49px] md:mx-auto"
              />
              <p className="text-white text-[20px] font-normal leading-[32.004px] opacity-[0.5882]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="footer-center">
              <p className="text-white text-[20px] font-normal leading-[30.6px] opacity-[0.5882]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br />
                <br />
                Do eiusmod tempor incididunt ut labore et dolore magna
                <br />
                <br />
                Aliqua. Quis ipsum suspendisse ultrices gravida. Risus.
              </p>
            </div>

            <div className="flex flex-col items-end md:items-center gap-[20px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76ed3d53a0b95966cfb1f1e42efdbb7851216083?width=254"
                alt="Footer Decoration"
                className="w-[127px] h-[141px] opacity-[0.451]"
              />
              <div className="social-links">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/09757bce8bb504ee9662f299a25dcc07233142f0?width=386"
                  alt="Social Media Links"
                  className="w-[193px] h-[83px]"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
