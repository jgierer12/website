import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const PageContext = React.createContext();

export const PageProvider = ({ children, ...props }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
          title
          description
        }
      }
    }
  `);

  const value = React.useMemo(
    () => ({
      ...siteMetadata,
      ...props,
    }),
    [siteMetadata, props]
  );
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePage = () => React.useContext(PageContext);
