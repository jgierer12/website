import * as React from "react";
import Helmet from "react-helmet";

export const SEO = props => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{props.title || `Jonas Gierer`}</title>
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:type"
        content={props.isArticle ? `article` : `website`}
      />
      {props.image && <meta property="og:image" content={props.image} />}
    </Helmet>
  );
};
