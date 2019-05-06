import * as React from "react";
import { graphql } from "gatsby";
import TwitterIcon from "boxicons/svg/logos/bxl-twitter.svg";
import GitHubIcon from "boxicons/svg/logos/bxl-github.svg";
import EmailIcon from "boxicons/svg/solid/bxs-envelope.svg";

import * as colors from "~/colors";
import { Layout } from "~/components/layout";
import { Nav, NavItemIcon, NavItemText } from "~/components/index-nav";
import { TintedImage } from "~/components/tinted-image";
import * as media from "~/media";

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar-grayscale.jpg" }) {
      childImageSharp {
        fixed(width: 335, height: 335) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const Highlight = ({ children }) => (
  <em
    css={{
      color: colors.greens.medium,
      fontWeight: `500`,
      fontStyle: `normal`,
    }}
  >
    {children}
  </em>
);

export default ({ data }) => (
  <Layout>
    <Layout.SEO description="Hi! My name is Jonas Gierer. I love creating modern and accessible websites and apps using JavaScript, React and other awesome technologies." />
    <main
      css={{
        minHeight: `100%`,
        padding: `20px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        [media.mobile.below]: {
          flexDirection: `column`,
        },
        fontSize: `150%`,
        lineHeight: `1.25`,
      }}
    >
      <TintedImage
        fixed={data.file.childImageSharp.fixed}
        css={{
          borderRadius: `50%`,
          flexShrink: 0,
          maxWidth: `calc(100vw - 40px)`,
          maxHeight: `calc(100vw - 40px)`,
        }}
        tintCss={{
          background: colors.greens.primary,
        }}
      />
      <div
        css={{
          maxWidth: `420px`,
          "& > * + *": {
            marginTop: `10px`,
          },
          [media.mobile.below]: {
            marginTop: `20px`,
          },
          [media.mobile.above]: {
            marginLeft: `20px`,
          },
        }}
      >
        <p>Hi! My name is</p>
        <h1
          css={{
            fontSize: `175%`,
            transform: `translateX(-2px)`,
            color: colors.greens.dark,
            fontWeight: `500`,
          }}
        >
          Jonas Gierer
        </h1>
        <p>
          I love creating <Highlight>modern</Highlight> and{` `}
          <Highlight>accessible</Highlight> websites and apps using{` `}
          <Highlight>JavaScript</Highlight>, <Highlight>React</Highlight> and
          other awesome technologies.
        </p>
        <Nav
          css={{
            marginTop: `20px`,
          }}
        >
          <NavItemIcon
            to="https://twitter.com/jgierer12"
            label="Visit my Twitter profile"
            icon={TwitterIcon}
          />
          <NavItemIcon
            to="https://github.com/jgierer12"
            label="Visit my GitHub profile"
            icon={GitHubIcon}
          />
          <NavItemIcon
            href="mailto:jonas@gierer.xyz"
            label="Send me an email"
            icon={EmailIcon}
          />
          <NavItemText to="/blog">Blog</NavItemText>
        </Nav>
      </div>
    </main>
  </Layout>
);
