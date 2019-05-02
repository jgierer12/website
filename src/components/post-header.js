import * as React from "react";
import { format as formatDate } from "date-fns";

import * as colors from "~/colors";
import { TintedImage } from "~/components/tinted-image";
import { Heading } from "~/components/typography";

export const PostHeader = ({ mdx }) => (
  <>
    <TintedImage
      fluid={mdx.frontmatter.image.source.childImageSharp.fluid}
      css={{
        gridColumn: `1 / 4`,
        gridRow: `2 / 4`,
        zIndex: `-10`,
        "*::selection": {
          background: `none`,
        },
      }}
      tintCss={{
        mixBlendMode: `overlay`,
        background: `
            linear-gradient(160deg,
              ${colors.greens.primary}33 25%,
              ${colors.greens.primary} 100%
            )
          `,
      }}
    />
    <div
      css={{
        gridColumn: `2`,
        gridRow: `3`,
        padding: `20px`,
        background: colors.mono.white,
        textAlign: `center`,
        borderTopLeftRadius: `2px`,
        borderTopRightRadius: `2px`,
      }}
    >
      <Heading level={1} css={{ margin: `0px` }}>
        {mdx.frontmatter.title}
      </Heading>
      <div
        css={{
          color: colors.mono.medium,
          marginTop: `10px`,
          em: {
            fontStyle: `normal`,
            color: colors.mono.text,
          },
        }}
      >
        Published on{` `}
        <em>
          <time dateTime={mdx.frontmatter.published}>
            {formatDate(mdx.frontmatter.published, `MMMM D, YYYY`)}
          </time>
        </em>
        {` `}
        by{` `}
        <em>{mdx.frontmatter.author || `Jonas Gierer`}</em>
      </div>
    </div>
  </>
);
