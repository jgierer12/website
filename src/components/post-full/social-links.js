import * as React from "react";
import { graphql } from "gatsby";

import { Link } from "~/components/link";
import * as colors from "~/colors";
import { transition } from "~/transition";
import { siteMetadata, repo } from "~/config";

export const query = graphql`
  fragment PostFull_SocialLinks on Mdx {
    fields {
      slug
    }
    frontmatter {
      title
      social {
        redditUrl
      }
    }
    parent {
      ... on File {
        relativePath
      }
    }
  }
`;

export const SocialLinks = ({ mdx }) => {
  const postUrl = `${siteMetadata.url}${mdx.fields.slug}`;

  const twitterUrl = React.useMemo(
    () => `https://mobile.twitter.com/search?q=${encodeURIComponent(postUrl)}`,
    [postUrl]
  );
  const redditUrl = React.useMemo(
    () =>
      `https://www.reddit.com/submit?url=${encodeURIComponent(
        postUrl
      )}&title=${encodeURIComponent(mdx.frontmatter.title)}`,
    []
  );
  const githubUrl = React.useMemo(
    () =>
      `${repo.url}/edit/master/${repo.contentDir}/${mdx.parent.relativePath}`,
    []
  );

  return (
    <ul
      css={{
        position: `relative`,
        padding: `20px`,
        display: `flex`,
        fontSize: `90%`,
        gridRow: `5`,
        gridColumn: `2`,
        justifyContent: `center`,
        "&::before": {
          content: `''`,
          position: `absolute`,
          height: `1px`,
          background: colors.mono.light,
          width: `calc(100% - 40px)`,
          zIndex: `-10`,
          top: `50%`,
        },
        li: {
          background: colors.mono.white,
          padding: `0px 10px`,
        },
        a: {
          ...transition(`color`),
          ...transition.out,
        },
        "a:hover": {
          ...transition.in,
          color: colors.mono.medium,
        },
        "& > * + *": {
          marginLeft: `20px`,
        },
      }}
    >
      <li>
        <Link to={twitterUrl}>Discuss on Twitter</Link>
      </li>
      <li>
        <Link to={mdx.frontmatter.social.redditUrl || redditUrl}>
          Discuss on Reddit
        </Link>
      </li>
      <li>
        <Link to={githubUrl}>Edit on GitHub</Link>
      </li>
    </ul>
  );
};
