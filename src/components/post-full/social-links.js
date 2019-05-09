import * as React from "react";
import { graphql } from "gatsby";
import TwitterIcon from "boxicons/svg/logos/bxl-twitter.svg";
import RedditIcon from "boxicons/svg/logos/bxl-reddit.svg";
import GithubIcon from "boxicons/svg/logos/bxl-github.svg";

import { Link } from "~/components/link";
import * as colors from "~/colors";
import { transition } from "~/transition";
import { siteMetadata, repo } from "~/config";
import * as media from "~/media";

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

const Item = ({ verb = `Discuss`, platform, icon: Icon, url }) => (
  <li
    css={{
      [media.phone.above]: {
        background: colors.mono.white,
        padding: `0px 10px`,
      },
    }}
  >
    <Link
      to={url}
      css={{
        display: `flex`,
        [media.phone.below]: {
          flexDirection: `column`,
        },
        alignItems: `center`,
        ...transition(`color`),
        ...transition.out,
        ":hover": {
          ...transition.in,
          color: colors.mono.medium,
        },
      }}
    >
      <Icon
        css={{
          "&, & g": {
            // Reddit icon has fill on <g> instead of <svg>
            fill: `currentColor`,
          },
        }}
        width="1.5em"
        height="1.5em"
      />
      <span
        css={{
          [media.phone.below]: {
            marginTop: `5px`,
          },
          [media.phone.above]: {
            marginLeft: `5px`,
          },
        }}
      >
        {verb} on {platform}
      </span>
    </Link>
  </li>
);

const List = ({ children }) => (
  <ul
    css={{
      position: `relative`,
      padding: `20px`,
      display: `flex`,
      fontSize: `90%`,
      gridRow: `5`,
      gridColumn: `3`,
      justifyContent: `space-between`,
      textAlign: `center`,
      "& > * + *": {
        marginLeft: `20px`,
      },
      [media.phone.above]: {
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
      },
    }}
  >
    {children}
  </ul>
);

export const SocialLinks = ({ mdx }) => {
  const postUrl = `${siteMetadata.url}${mdx.fields.slug}`;

  const twitterUrl = React.useMemo(
    () => `https://mobile.twitter.com/search?q=${encodeURIComponent(postUrl)}`,
    [postUrl]
  );
  const redditUrl = React.useMemo(
    () =>
      (mdx.frontmatter.social && mdx.frontmatter.social.redditUrl) ||
      `https://www.reddit.com/submit?url=${encodeURIComponent(
        postUrl
      )}&title=${encodeURIComponent(mdx.frontmatter.title)}`,
    [mdx.frontmatter.social]
  );
  const githubUrl = React.useMemo(
    () =>
      `${repo.url}/edit/master/${repo.contentDir}/${mdx.parent.relativePath}`,
    []
  );

  return (
    <List>
      <Item platform="Twitter" icon={TwitterIcon} url={twitterUrl} />
      <Item platform="Reddit" icon={RedditIcon} url={redditUrl} />
      <Item platform="GitHub" verb="Edit" icon={GithubIcon} url={githubUrl} />
    </List>
  );
};
