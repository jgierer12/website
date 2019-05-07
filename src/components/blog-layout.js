import * as React from "react";

import { Header as DefaultHeader } from "~/components/header";

export const BlogLayout = ({
  children,
  header: Header = DefaultHeader,
  ...props
}) => {
  return (
    <div
      {...props}
      css={{
        display: `grid`,
        gridTemplateColumns: `1fr minmax(1vw, 720px) 1fr`,
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
  );
};
