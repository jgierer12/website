import * as React from "react";
import Helmet from "react-helmet";

import { usePage } from "~/contexts/page";

export const SEO = () => {
  const { title, description, image, type } = usePage();
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content={type || `website`} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};
