import * as React from "react";
import { graphql } from "gatsby";

import * as colors from "~/colors";
import { PostHeader } from "~/components/post-full/header";
import { PostBody } from "~/components/post-full/body";
import { SocialLinks } from "~/components/post-full/social-links";
import { SuggestedReading } from "~/components/post-full/suggested-reading";
import { Footer } from "~/components/post-full/footer";

export const query = graphql`
  fragment PostFull on Mdx {
    ...PostFull_Header
    ...PostFull_Body
    ...PostFull_SocialLinks
    ...PostFull_SuggestedReading
    ...PostFull_Footer
  }
`;

export const PostFull = () => (
  <>
    <PostHeader />
    <PostBody />
    <SocialLinks />
    <div
      css={{
        gridColumn: `1 / -1`,
        gridRow: `6 / 8`,
        background: colors.mono.light,
      }}
    />
    <SuggestedReading />
    <Footer />
  </>
);
