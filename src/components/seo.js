import * as React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import { usePage } from "~/contexts/page";

export const SEO = () => {
  const { title, description, image, type } = usePage();
  const {
    site: {
      siteMetadata: { url },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content={type || `website`} />
      {image && <meta property="og:image" content={`${url}${image}`} />}
    </Helmet>
  );
};
