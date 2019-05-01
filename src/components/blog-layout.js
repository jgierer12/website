import * as React from "react";

import { Header as DefaultHeader } from "./header";

export const BlogLayout = ({ children, header: Header = DefaultHeader }) => {
  return (
    <>
      <div
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 800px 1fr`,
        }}
      >
        <Header
          css={{
            gridColumn: `2`,
            gridRow: `1`,
          }}
        />
        {children}
      </div>
    </>
  );
};
