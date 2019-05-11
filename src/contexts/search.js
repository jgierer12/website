import * as React from "react";

export const SearchContext = React.createContext();

export const SearchStateProvider = ({ children }) => {
  const [isSearch, setIsSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState(``);

  const value = React.useMemo(
    () => ({
      isSearch,
      setIsSearch,
      searchQuery,
      setSearchQuery,
    }),
    [isSearch, searchQuery]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => React.useContext(SearchContext);
