import * as React from "react";
import { graphql } from "gatsby";

import { Link } from "~/components/link";
import { Heading } from "~/components/typography";
import * as colors from "~/colors";
import { transition } from "~/transition";
import * as media from "~/media";
import { TintedImage } from "~/components/tinted-image";
import { usePostContext } from "~/contexts/post";

export const query = graphql`
  fragment PostFull_SuggestedReading on Mdx {
    frontmatter {
      suggestedReading {
        url
        title
        image {
          childImageSharp {
            fluid(maxWidth: 720, maxHeight: 240, grayscale: true) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const Item = ({ url, title, image }) => {
  const host = React.useMemo(() => {
    let parsedUrl = {};
    try {
      parsedUrl = new URL(url);
    } catch (error) {}

    const { host } = parsedUrl;
    return host;
  }, [url]);

  return (
    <li>
      <Link
        to={url}
        className="post-card"
        css={{
          height: `100%`,
          display: `flex`,
          flexDirection: `column`,
          borderRadius: `4px`,
          overflow: `hidden`,
        }}
      >
        <TintedImage
          fluid={image.childImageSharp.fluid}
          tintCss={{
            mixBlendMode: `overlay`,
            background: `
            linear-gradient(160deg,
              ${colors.greens.primary}33 25%,
              ${colors.greens.primary} 100%
            )
          `,
            ...transition(`opacity`),
            ...transition.out,
            ".post-card:hover &": {
              ...transition.in,
              opacity: 0.75,
            },
          }}
        />
        <div
          css={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            flexGrow: `1`,
            padding: `10px`,
            background: colors.mono.white,
          }}
        >
          <div
            css={{
              lineHeight: `1.2`,
              fontWeight: `500`,
              ...transition(`color`),
              ...transition.out,
              color: colors.greens.medium,
              ".post-card:hover &": {
                ...transition.in,
                color: colors.greens.dark,
              },
            }}
          >
            {title}
          </div>
          <div
            css={{
              marginTop: `5px`,
              textTransform: `uppercase`,
              fontSize: `75%`,
              color: colors.mono.medium,
            }}
          >
            {host || `From my blog`}
          </div>
        </div>
      </Link>
    </li>
  );
};

export const SuggestedReading = () => {
  const {
    frontmatter: { suggestedReading },
  } = usePostContext();

  if (!suggestedReading || suggestedReading.length === 0) {
    return null;
  }

  return (
    <>
      <div
        css={{
          gridColumn: `1 / -1`,
          gridRow: `6`,
          background: colors.mono.light,
        }}
      />
      <div
        css={{
          gridColumn: `2 / 5`,
          gridRow: `6`,
          padding: `20px`,
        }}
      >
        <Heading
          level={3}
          css={{
            margin: `0px`,
          }}
        >
          Suggested reading
        </Heading>
        <ul
          css={{
            display: `grid`,
            gridAutoColumns: `1fr`,
            [media.phone.above]: {
              gridAutoFlow: `column`,
            },
            gridGap: `20px`,
            marginTop: `20px`,
          }}
        >
          {suggestedReading.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </ul>
      </div>
    </>
  );
};
