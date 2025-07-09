import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Product {
  id: string;
  key: string;
  image: string;
}

const products: Product[] = [
  {
    id: "hastyp2p-core",
    key: "hastyp2p_core",
    image: "/Hasty_P2P_Core.png",
  },
  {
    id: "hastypay-engine",
    key: "hastypay_engine",
    image: "/Hasty_Pay_Engine.png",
  },
  {
    id: "hastylegal-guide",
    key: "hastylegal_guide",
    image: "/Hasty_Legal_Guide.png",
  },
  {
    id: "hastybrand-studio",
    key: "hastybrand_studio",
    image: "/Hasty_BrandStudio.png",
  },
];

function ProductSection() {
  const { t } = useTranslation();
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  const handleProductClick = (product: Product) => {
    setActiveProduct(product);
  };

  return (
    <>
      {/* Section Headers */}
      <h2 className="text-center text-lg sm:text-xl lg:text-[24px] font-normal leading-normal uppercase mb-8 sm:mb-10 lg:mb-[48px]">
        <span className="text-white">
          {t("products.section_title").split(" ")[0]}{" "}
        </span>
        <span className="text-[#3d83bd]">
          {t("products.section_title").split(" ")[1]}
        </span>
      </h2>
      <h3 className="text-white text-center text-xl sm:text-2xl lg:text-[33px] font-normal leading-normal mb-12 sm:mb-16 lg:mb-[120px]">
        {t("products.section_subtitle")}
      </h3>

      {/* Product Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16 lg:mb-[106px] max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="flex items-center justify-center h-[42px] border-[2.223px] border-[#316bb6] rounded-xl text-white text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-normal cursor-pointer transition-all duration-300 hover:bg-[rgba(62,132,190,0.1)] px-3 sm:px-4"
          >
            {t(`products.${product.key}.name`)}
          </div>
        ))}
      </div>

      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[78px] items-start">
        <div className="product-info w-full lg:flex-1 lg:max-w-[529px] order-1 lg:order-1">
          <h3 className="text-white text-xl sm:text-2xl lg:text-[34px] font-normal leading-normal mb-6 sm:mb-8 lg:mb-[56px]">
            <span className="text-[#3d83bd]">
              {t(`products.${activeProduct.key}.title`)}
            </span>{" "}
            {t(`products.${activeProduct.key}.title_accent`)}
          </h3>
          <div className="text-white text-sm sm:text-base lg:text-[18px] font-normal leading-6 sm:leading-7 lg:leading-[26.9px] space-y-4">
            <div>
              <strong>{t("products.labels.objetivo")}</strong>
              <br />
              {t(`products.${activeProduct.key}.objetivo`)}
            </div>
            <div>
              <strong>{t("products.labels.operacao")}</strong>
              <br />
              {t(`products.${activeProduct.key}.operacao`)}
            </div>
            <div>
              <strong>{t("products.labels.desenvolvedor")}</strong>
              <br />
              {t(`products.${activeProduct.key}.desenvolvedor`)}
            </div>
            <div>
              <strong>{t("products.labels.tempo")}</strong>
              <br />
              {t(`products.${activeProduct.key}.tempo`)}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:flex-1 order-2 lg:order-2">
          <img
            src={activeProduct.image}
            alt={t(`products.${activeProduct.key}.name`)}
            className={`w-full h-auto rounded-lg object-contain transition-all duration-500 ease-in-out ${
              activeProduct.key === "hastypay_engine" ||
              activeProduct.key === "hastylegal_guide"
                ? "max-w-[300px] lg:max-w-[400px]"
                : "max-w-[500px] lg:max-w-[600px]"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default ProductSection;
