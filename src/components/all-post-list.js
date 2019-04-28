import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { PostList } from "../components/post-list";

export const AllPostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___published, order: DESC }) {
        edges {
          post: node {
            ...PostListPost
          }
        }
      }
    }
  `);

  const posts = data.allMdx.edges.map(({ post }) => post);

  return <PostList posts={posts} />;
};
