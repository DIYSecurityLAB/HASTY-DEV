import { useState } from "react";

interface Product {
  id: string;
  name: string;
  icon: string;
  title: string;
  titleAccent: string;
  image: string;
  objetivo: string;
  operacao: string;
  desenvolvedor: string;
  tempo: string;
}

const products: Product[] = [
  {
    id: "hastyp2p-core",
    name: "HastyP2P Core",
    icon: "⚙️",
    title: "HastyP2P",
    titleAccent: "Core",
    image: "/Hasty_P2P_Core.png",
    objetivo:
      "Automatize sua operação P2P com contratos inteligentes, eliminando intermediários e reduzindo riscos como MEs.",
    operacao:
      "Solução white-label e modular, adaptável ao seu negócio, com liquidez, segurança e contratos inteligentes orquestrados.",
    desenvolvedor:
      "Time Web3 da Hastydev, especialista em automação cripto, integração com carteiras e backends seguros.",
    tempo:
      "Contagem regressiva, grupo colaborativo e rede de profissionais para execução ágil e alinhada com seu escopo.",
  },
  {
    id: "hastypay-engine",
    name: "HastyPay Engine",
    icon: "💳",
    title: "HastyPay",
    titleAccent: "Engine",
    image: "/Hasty_Pay_Engine.png",
    objetivo:
      "Processamento de pagamentos cripto em USDT, BTC e mais, com segurança, conformidade e experiência de checkout moderna.",
    operacao:
      "Sistema white-label com QR code, confirmação on-chain e integração total ao fluxo de pagamento do cliente.",
    desenvolvedor:
      "Equipe experiente da Hastydev, com foco em gateways Web3 e APIs descentralizadas de pagamento.",
    tempo:
      "Projeto com cronograma claro, grupo ativo com cliente e devs, e comunicação em tempo real para decisões.",
  },
  {
    id: "hastylegal-guide",
    name: "HastyLegal Guide",
    icon: "⚖️",
    title: "HastyLegal",
    titleAccent: "Guide",
    image: "/Hasty_Legal_Guide.png",
    objetivo:
      "Escolha a melhor jurisdição para sua estrutura cripto com base legal, fiscal e regulatória personalizada.",
    operacao:
      "Imersão no modelo do cliente, com entregas sob medida para formato societário e exigências legais.",
    desenvolvedor:
      "Equipe jurídica parceira, especializada em cripto e estruturas offshore com histórico em compliance Web3.",
    tempo:
      "Fases curtas com grupos de fundadores e advogados, permitindo ajustes rápidos e trocas entre projetos.",
  },
  {
    id: "hastybrand-studio",
    name: "HastyBrand Studio",
    icon: "🎨",
    title: "HastyBrand",
    titleAccent: "Studio",
    image: "/Hasty_BrandStudio.png",
    objetivo:
      "Crie uma identidade visual única para Web3, com mascotes, cores ousadas e UX que orienta o usuário.",
    operacao:
      "Inclui brandbook completo, assets visuais e melhorias de funil com foco em destaque digital cripto.",
    desenvolvedor:
      "Time criativo da Hastydev, integrado a produto e tech, com experiência em marcas Web3 e DeFi.",
    tempo:
      "Marcos visuais com validações contínuas, grupo colaborativo e troca com outros projetos criativos do setor.",
  },
];

function ProductSection() {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  const handleProductClick = (product: Product) => {
    setActiveProduct(product);
  };

  return (
    <>
      {/* Product Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-12 sm:mb-16 lg:mb-[106px]">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="flex items-center justify-center min-w-[280px] flex-1 sm:flex-none sm:min-w-[240px] md:min-w-[260px] md:max-w-[320px] lg:min-w-[280px] lg:max-w-[320px] xl:min-w-[300px] xl:max-w-[340px] 2xl:min-w-[320px] 2xl:max-w-[360px] h-[51px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)] px-3 sm:px-4"
            style={{ flexBasis: "calc(50% - 12px)" }}
          >
            {product.name}
          </div>
        ))}
      </div>

      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[78px] items-start">
        <div className="product-info w-full lg:flex-1 lg:max-w-[529px] order-1 lg:order-1">
          <h3 className="text-white text-xl sm:text-2xl lg:text-[34px] font-normal leading-normal mb-6 sm:mb-8 lg:mb-[56px]">
            <span className="text-[#3d83bd]">{activeProduct.title}</span>{" "}
            {activeProduct.titleAccent}
          </h3>
          <div className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[26.9px] space-y-4">
            <div>
              <strong>Objetivo:</strong>
              <br />
              {activeProduct.objetivo}
            </div>
            <div>
              <strong>Operação:</strong>
              <br />
              {activeProduct.operacao}
            </div>
            <div>
              <strong>Desenvolvedor:</strong>
              <br />
              {activeProduct.desenvolvedor}
            </div>
            <div>
              <strong>Tempo:</strong>
              <br />
              {activeProduct.tempo}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:flex-1 order-2 lg:order-2">
          <img
            src={activeProduct.image}
            alt={activeProduct.name}
            className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-lg object-contain transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}

export default ProductSection;
