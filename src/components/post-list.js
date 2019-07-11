import * as React from "react";
import Fuse from "fuse.js";
import { graphql } from "gatsby";

import { PostCard } from "~/components/post-card";
import { useSearch } from "~/contexts/search";

export const postListPostFragment = graphql`
  fragment PostListPost on Mdx {
    id
    frontmatter {
      title
      excerpt
    }
    ...PostCard
  }
`;

export const PostList = ({ posts, ...props }) => {
  const { isSearch, searchQuery } = useSearch();

  const fuse = React.useMemo(
    () =>
      new Fuse(posts, {
        keys: [`frontmatter.title`, `frontmatter.excerpt`],
      }),
    [posts]
  );

  const filteredPosts = React.useMemo(() => {
    if (/^\s*$/.test(searchQuery)) return posts;
    return fuse.search(searchQuery);
  }, [fuse, posts, searchQuery]);

  return (
    <div
      {...props}
      css={{
        "& > * + *": {
          marginTop: `20px`,
        },
      }}
    >
      {(isSearch ? filteredPosts : posts).map(post => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
};
