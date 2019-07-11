import * as React from "react";
import { graphql } from "gatsby";

import { Link } from "~/components/link";
import { usePost } from "~/contexts/post";
import * as colors from "~/colors";
import { transition } from "~/transition";

export const query = graphql`
  fragment PostFull_Footer on Mdx {
    frontmatter {
      image {
        credit {
          artist {
            name
            url
          }
          source {
            name
            url
          }
        }
      }
    }
  }
`;

const FooterLink = ({ ...props }) => (
  <Link
    {...props}
    css={{
      color: colors.mono.medium,
      ...transition(`color`),
      ...transition.out,
      "&:hover": {
        ...transition.in,
        color: colors.mono.dark,
      },
    }}
  />
);

export const Footer = () => {
  const post = usePost();
  const {
    frontmatter: {
      image: { credit },
    },
  } = post;

  return (
    <div
      css={{
        gridRow: `7`,
        gridColumn: `2 / 5`,
        padding: `20px`,
        fontSize: `90%`,
      }}
    >
      {credit && (
        <p>
          Header image by{` `}
          <FooterLink to={credit.artist.url}>{credit.artist.name}</FooterLink>
          {` `}
          on{` `}
          <FooterLink to={credit.source.url}>{credit.source.name}</FooterLink>
        </p>
      )}
    </div>
  );
};
