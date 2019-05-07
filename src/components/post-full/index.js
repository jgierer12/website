import * as React from "react";
import { graphql } from "gatsby";

import { BlogLayout } from "~/components/blog-layout";
import { PostHeader } from "~/components/post-full/header";
import { PostBody } from "~/components/post-full/body";
import { SocialLinks } from "~/components/post-full/social-links";

export const query = graphql`
  fragment PostFull on Mdx {
    ...PostFull_Header
    ...PostFull_Body
    ...PostFull_SocialLinks
  }
`;

export const PostFull = ({ post }) => (
  <BlogLayout css={{ paddingBottom: `200px` }}>
    <PostHeader mdx={post} />
    <PostBody mdx={post} />
    <SocialLinks mdx={post} />
  </BlogLayout>
);
