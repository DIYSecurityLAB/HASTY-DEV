import * as React from "react";

interface HomepageImageProps {
  className?: string;
}

function HomepageImage({ className }: HomepageImageProps) {
  return (
    <img
      src="/image/20250508_HOMEPAGE_SITE_HASTYDEV_V6.pdf"
      alt="HastyDev Homepage Design"
      className={className}
      style={{
        aspectRatio: "0.34",
        objectFit: "contain",
        objectPosition: "center",
        width: "100%",
      }}
    />
  );
}

export default HomepageImage;
