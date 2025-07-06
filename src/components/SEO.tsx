import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "HastyDev - Kits de Incorporação para P2P Core | Soluções Web3",
  description = "A HastyDev transforma sua ideia em realidade no universo cripto com pacotes completos que unem jurídico, marketing e tecnologia. Kits de incorporação para P2P Core com automação inteligente.",
  keywords = "HastyDev, P2P Core, Web3, cripto, blockchain, contratos inteligentes, incorporação, jurídico, tecnologia, automação",
  image = "https://hastydev.com/og-image.jpg",
  url = "https://hastydev.com/",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (element) {
        element.content = content;
      } else {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Update Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);

    // Update Twitter tags
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", image, true);
    updateMetaTag("twitter:url", url, true);

    // Update canonical link
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (canonical) {
      canonical.href = url;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = url;
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default SEO;
