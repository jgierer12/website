import * as React from "react";

export const PostContext = React.createContext();

export const PostContextProvider = ({ value, children }) => {
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  return React.useContext(PostContext);
};
