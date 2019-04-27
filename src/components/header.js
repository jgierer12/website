import * as React from "react";
import SearchIcon from "boxicons/svg/regular/bx-search.svg";
import XIcon from "boxicons/svg/regular/bx-x.svg";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import { Link } from "./link";
import * as colors from "../colors";
import { SearchContext } from "./search-context";

const SearchButton = ({ icon: Icon, ...props }) => (
  <button {...props}>
    <Icon role="img" fill="currentColor" css={{ display: `block` }} />
  </button>
);

const SearchInput = props => (
  <input
    autoFocus
    type="text"
    {...props}
    css={{
      borderBottom: `2px solid ${colors.mono.dark}`,
      flexGrow: `1`,
      height: `100%`,
    }}
  />
);

const Brand = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Link
      to="/"
      css={{
        display: `flex`,
        alignItems: `center`,
        "& > * + *": {
          marginLeft: `10px`,
        },
      }}
    >
      <Image fixed={data.file.childImageSharp.fixed} />
      <span css={{ fontWeight: `500` }}>Jonas Gierer</span>
    </Link>
  );
};

export const Header = () => {
  const { isSearch, setIsSearch } = React.useContext(SearchContext);

  const toggleSearch = React.useCallback(
    () => setIsSearch(current => !current),
    []
  );

  return (
    <header css={{ padding: `20px` }}>
      <div
        css={{
          margin: `auto`,
          maxWidth: `800px`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          "& > * + *": {
            marginLeft: `20px`,
          },
          height: `50px`,
        }}
      >
        {isSearch ? <SearchInput /> : <Brand />}
        <SearchButton
          onClick={toggleSearch}
          icon={isSearch ? XIcon : SearchIcon}
        />
      </div>
    </header>
  );
};
