import * as React from "react";
import { graphql } from "gatsby";

import { BlogLayout } from "~/components/blog-layout";
import { PostHeader } from "~/components/post-full/header";
import { PostBody } from "~/components/post-full/body";

export const query = graphql`
  fragment PostFull on Mdx {
    ...PostFull_Header
    ...PostFull_Body
  }
`;

export const PostFull = ({ post }) => (
  <BlogLayout>
    <PostHeader mdx={post} />
    <PostBody mdx={post} />
  </BlogLayout>
);
