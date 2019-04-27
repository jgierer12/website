import * as React from "react";
import Fuse from "fuse.js";

import { PostCard } from "./post-card";
import { useSearchContext } from "./search-context";

export const PostList = ({ posts, ...props }) => {
  const { isSearch, searchQuery } = useSearchContext();

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
  }, [searchQuery]);

  return (
    <div
      {...props}
      css={{
        "& > * + *": {
          marginTop: `20px`,
        },
      }}
    >
      {(isSearch ? filteredPosts : posts).map((post, i) => (
        <PostCard key={i} data={post} />
      ))}
    </div>
  );
};
