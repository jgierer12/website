import * as React from "react";
import { Global } from "@emotion/core";

import { Layout } from "../components/layout";
import { AllPostList } from "../components/all-post-list";
import { BlogLayout } from "../components/blog-layout";
import { HeaderWithSearch } from "../components/header-with-search";

export default () => {
  return (
    <>
      <Global
        styles={{
          body: {
            // So content doesn't reflow during search
            // due to appearing or disappearing scrollbar
            overflowY: `scroll`,
          },
        }}
      />
      <Layout pageType="blog">
        <Layout.SEO title="Jonas Gierer's Blog" />
        <BlogLayout header={HeaderWithSearch}>
          <div
            css={{
              gridColumn: `2`,
              gridRow: `4`,
              paddingBottom: `20px`,
            }}
          >
            <AllPostList />
          </div>
        </BlogLayout>
      </Layout>
    </>
  );
};
