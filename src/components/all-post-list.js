import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { PostList } from "../components/post-list";

export const AllPostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          post: node {
            ...PostCard
          }
        }
      }
    }
  `);

  const posts = data.allMdx.edges.map(({ post }) => post);

  return <PostList posts={posts} />;
};
