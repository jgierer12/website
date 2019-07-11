import * as React from "react";
import SearchIcon from "boxicons/svg/regular/bx-search.svg";
import XIcon from "boxicons/svg/regular/bx-x.svg";

import * as colors from "~/colors";
import { useSearch } from "~/contexts/search";
import { Header, HeaderLink } from "~/components/header";

const SearchButton = () => {
  const { isSearch, setIsSearch } = useSearch();

  const toggleSearch = React.useCallback(
    () => setIsSearch(current => !current),
    [setIsSearch]
  );
  const Icon = isSearch ? XIcon : SearchIcon;

  return (
    <HeaderLink
      as={`button`}
      aria-label={isSearch ? `Cancel search` : `Search`}
      onClick={toggleSearch}
    >
      <Icon role="img" fill="currentColor" css={{ display: `block` }} />
    </HeaderLink>
  );
};

const SearchInput = () => {
  const { searchQuery, setSearchQuery, setIsSearch } = useSearch();
  const handleSearchChange = React.useCallback(
    event => {
      setSearchQuery(event.target.value);
    },
    [setSearchQuery]
  );

  React.useEffect(() => {
    const escKeyListener = event => {
      if (event.key === `Escape`) {
        setIsSearch(false);
      }
    };
    document.addEventListener(`keydown`, escKeyListener);
    return () => {
      document.removeEventListener(`keydown`, escKeyListener);
    };
  }, [setIsSearch]);

  return (
    <input
      aria-label="Search"
      autoFocus
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      css={{
        borderBottom: `2px solid ${colors.mono.dark}`,
        flexGrow: `1`,
        height: `100%`,
      }}
    />
  );
};

export const HeaderWithSearch = props => {
  const { isSearch } = useSearch();
  return (
    <Header {...props}>
      {isSearch && (
        <Header.Left>
          <SearchInput />
        </Header.Left>
      )}
      <Header.Right>
        <SearchButton />
      </Header.Right>
    </Header>
  );
};
