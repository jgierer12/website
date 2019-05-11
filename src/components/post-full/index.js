import * as React from "react";
import { graphql } from "gatsby";

import { BlogLayout } from "~/components/blog-layout";
import { PostHeader } from "~/components/post-full/header";
import { PostBody } from "~/components/post-full/body";
import { SocialLinks } from "~/components/post-full/social-links";
import { SuggestedReading } from "~/components/post-full/suggested-reading";

export const query = graphql`
  fragment PostFull on Mdx {
    ...PostFull_Header
    ...PostFull_Body
    ...PostFull_SocialLinks
    ...PostFull_SuggestedReading
  }
`;

export const PostFull = () => (
  <BlogLayout css={{ paddingBottom: `200px` }}>
    <PostHeader />
    <PostBody />
    <SocialLinks />
    <SuggestedReading />
  </BlogLayout>
);
