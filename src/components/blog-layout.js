import * as React from "react";

import { Header as DefaultHeader } from "~/components/header";
import * as media from "~/media";

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
        gridTemplateColumns: `0px 100vw 0px`,
        [media.phone.above]: {
          gridTemplateColumns: `1fr 720px 1fr`,
        },
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
