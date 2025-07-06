import * as React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      {/* Background Layer */}
      <div className="background-layer"></div>

      {/* Circuit Background */}
      <div className="circuit-background">
        <div className="circuit-overlay">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e813f8e15d799c4c8651e01a46f7898f9ebe1d20?width=3108"
            alt=""
            className="circuit-image"
          />
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
              alt="HastyDev Logo"
              className="main-logo"
            />
          </div>
          <nav className="navigation">
            <a href="#produto" className="nav-item">
              Produto
            </a>
            <a href="#plataforma" className="nav-item active ">
              Plataforma
            </a>
            <a href="#sobre" className="nav-item">
              Sobre
            </a>
          </nav>
          <div className="language-selector">
            <span className="language-text">Português (Brasil)</span>
            <svg
              className="dropdown-arrow"
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
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Kits de Incorporação para</h1>
          <h2 className="hero-subtitle">P2P Core</h2>
          <p className="hero-description">
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
          <button className="contact-button">Entre em contato conosco</button>
        </div>
      </section>

      {/* Section 2 - Infinitas Possibilidades */}
      <section className="possibilities-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="white-text">Infinitas </span>
            <span className="blue-text">possibilidades</span>
          </h2>
          <h3 className="section-subtitle">
            Produtos para todas as suas necessidades
          </h3>

          <div className="products-menu">
            <div className="product-item active">HastyP2P Core</div>
            <div className="product-item">HastyPay Engine</div>
            <div className="product-item">HastyLegal Guide</div>
            <div className="product-item">HastyBrand Studio</div>
          </div>

          <div className="product-content">
            <div className="product-info">
              <h3 className="product-title">
                <span className="blue-text">HastyP2P</span> Core
              </h3>
              <div className="product-description">
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
            <div className="product-image">
              <img
                src="/image/imagem-btc.png"
                alt="HastyP2P Core"
                className="product-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Por que a HastyDev */}
      <section className="why-hastydev-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="blue-text">Por que</span> a HastyDev?
          </h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="image/Vector Smart Object (6).png"
                  alt="Technology Icon"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">
                  Tecnologia de ponta a ponta para o universo Web3
                </h3>
                <p className="feature-description">
                  A Hastydev entrega soluções completas — do contrato
                  inteligente ao design da sua marca. Combinamos engenharia,
                  jurídico, UX e cripto em um só fluxo, pronto para transformar
                  ideias em produtos escaláveis no ecossistema descentralizado.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="/image/Vector Smart Object (4).png"
                  alt="Speed Icon"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">
                  Velocidade de execução com precisão cirúrgica
                </h3>
                <p className="feature-description">
                  No mercado Web3, mover rápido é essencial. Nossos times
                  trabalham com entregas coordenadas, cronogramas visíveis e
                  grupos ativos de projeto para garantir que você receba
                  exatamente o que precisa, no tempo certo e sem retrabalho.
                  Tudo com a agilidade que empresas de tecnologia exigem.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="/image/Vector Smart Object (3).png"
                  alt="Connection Icon"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">
                  Conexão direta com o ecossistema cripto real
                </h3>
                <p className="feature-description">
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
      <section className="dashboard-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="blue-text">Um painel</span> para todas as suas
            atividades
          </h2>

          <div className="dashboard-content">
            <div className="dashboard-features">
              <div className="dashboard-feature">
                <h3 className="feature-title">
                  Crie seus Cupons para Promoções
                </h3>
                <p className="feature-description">
                  Gere cupons personalizados direto na plataforma e aumente suas
                  conversões com incentivos inteligentes. Promoções com cripto,
                  na palma da sua mão.
                </p>
              </div>

              <div className="dashboard-feature">
                <h3 className="feature-title">
                  Acompanhe o Desempenho em Tempo Real
                </h3>
                <p className="feature-description">
                  Visualize conversões, volume de vendas e uso de cupons com
                  total transparência. Mais controle, menos adivinhação.
                </p>
              </div>

              <div className="dashboard-feature">
                <h3 className="feature-title">
                  Dashboard feito para o Lojista
                </h3>
                <p className="feature-description">
                  Tudo o que você precisa para gerenciar pagamentos e promoções
                  em um só lugar. Fácil de usar, pronto pra escalar.
                </p>
              </div>
            </div>

            <div className="dashboard-image">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a69030946afd7b560cac8724174f48335150b71?width=1726"
                alt="Dashboard Preview"
                className="dashboard-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="blue-text">O que</span> nossos usuários dizem sobre
            nós
          </h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "A Hastydev entendeu exatamente o que a gente precisava e foi
                muito ágil em entregar tudo funcionando. A automação com
                contratos inteligentes usando o DEPIX melhorou nossas conversões
                e tirou várias travas operacionais que a gente tinha. Os
                relatórios deixaram tudo mais claro para nossos parceiros e
                influenciadores, o que melhorou muito a relação com eles. Foi um
                alívio contar com um time tão técnico e direto ao ponto."
              </p>
              <p className="testimonial-author">— Equipe Alfredp2p</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Ficamos impressionados com os resultados do Alfred P2P após a
                integração do DEPIX e a automação feita pela Hastydev. A redução
                significativa nos MEDs foi um grande avanço, mas o que realmente
                chamou nossa atenção foi o aumento no volume de transações
                internamente. Isso não só melhorou a eficiência da operação,
                como também se tornou um marco na evolução da descentralização
                dos P2Ps. O trabalho da Hastydev foi fundamental para trazer
                mais segurança, escalabilidade e confiança para o ecossistema."
              </p>
              <p className="testimonial-author">— Equipe Eulen</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
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
              <p className="testimonial-author">— Equipe pagueBit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Clients */}
      <section className="clients-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="blue-text">Nossos </span>clientes
          </h2>

          <div className="clients-container">
            <div className="clients-grid">
              <div className="client-logo-group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f45aea6b870d278c06a1d1140376ff19c57097?width=70"
                  alt="Strategy Mars"
                  className="client-logo-small"
                />
                <span className="client-name">Strategy Mars</span>
              </div>

              <img
                src="/image/2024024_Logo_HASTYDEV_Horizontal_Negativo.png"
                alt="HastyDev Logo"
                className="client-logo"
              />

              <img
                src="/image/Logo_Alfred_2025_negativo.png"
                alt="Alfred Logo"
                className="client-logo"
              />

              <img
                src="/image/Logo-diy-sec-lab.png"
                alt="Diy Sec Lab Logo"
                className="client-logo"
              />

              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1468476f1b9f99fbcafec899491f7534a3768ad?width=246"
                alt="DIY Sec Lab Logo"
                className="client-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a395ff77656e0ca5e09947460fe48467a7532cc?width=348"
                alt="HastyDev Footer Logo"
                className="footer-logo"
              />
              <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="footer-center">
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br />
                <br />
                Do eiusmod tempor incididunt ut labore et dolore magna
                <br />
                <br />
                Aliqua. Quis ipsum suspendisse ultrices gravida. Risus.
              </p>
            </div>

            <div className="footer-right">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76ed3d53a0b95966cfb1f1e42efdbb7851216083?width=254"
                alt="Footer Decoration"
                className="footer-decoration"
              />
              <div className="social-links">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/09757bce8bb504ee9662f299a25dcc07233142f0?width=386"
                  alt="Social Media Links"
                  className="social-icons"
                />
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb06832d834ee8fce8a2ec639b899fa86237ede?width=3208"
          alt="Footer Background"
          className="footer-background"
        />
      </footer>
    </div>
  );
}

export default Homepage;
