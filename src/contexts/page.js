import * as React from "react";

export const PageContext = React.createContext();

export const usePage = () => React.useContext(PageContext);
