import * as React from "react";
import Image from "gatsby-image";

export const TintedImage = ({ tintCss, ...props }) => (
  <Image
    {...props}
    css={{
      "&::after": {
        content: `''`,
        position: `absolute`,
        top: `0px`,
        left: `0px`,
        width: `100%`,
        height: `100%`,
        mixBlendMode: `multiply`,
        opacity: `0.5`,
        ...tintCss,
      },
    }}
  />
);
