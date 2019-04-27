import * as React from "react";

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [isSearch, setIsSearch] = React.useState(false);

  const value = React.useMemo(() => {
    return {
      isSearch,
      setIsSearch,
    };
  }, [isSearch]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
