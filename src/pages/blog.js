import * as React from "react";
import { Global } from "@emotion/core";

import { AllPostList } from "~/components/all-post-list";
import { BlogLayout } from "~/components/blog-layout";
import { HeaderWithSearch } from "~/components/header-with-search";
import { PageContext } from "~/contexts/page";

export default () => (
  <PageContext.Provider
    value={{
      title: `Jonas Gierer's Blog`,
    }}
  >
    <Global
      styles={{
        body: {
          // So content doesn't reflow during search
          // due to appearing or disappearing scrollbar
          overflowY: `scroll`,
        },
      }}
    />
    <BlogLayout header={HeaderWithSearch}>
      <div
        css={{
          gridColumn: `3`,
          gridRow: `4`,
          paddingBottom: `20px`,
        }}
      >
        <AllPostList />
      </div>
    </BlogLayout>
  </PageContext.Provider>
);
