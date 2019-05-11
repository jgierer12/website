import * as React from "react";

export const PostContext = React.createContext();

export const usePost = () => React.useContext(PostContext);
