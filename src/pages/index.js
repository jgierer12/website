import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import TwitterIcon from "boxicons/svg/logos/bxl-twitter.svg";
import GitHubIcon from "boxicons/svg/logos/bxl-github.svg";
import EmailIcon from "boxicons/svg/solid/bxs-envelope.svg";

import * as colors from "../colors";
import { Layout } from "../components/layout";
import { Nav, NavItemIcon, NavItemText } from "../components/index-nav";

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar-grayscale.jpg" }) {
      childImageSharp {
        fixed(width: 335, height: 335) {
          ...GatsbyImageSharpFixed
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
        "@media screen and (max-width: 800px)": {
          flexDirection: `column`,
        },
        fontSize: `150%`,
        lineHeight: `1.25`,
      }}
    >
      <Img
        fixed={data.file.childImageSharp.fixed}
        css={{
          borderRadius: `50%`,
          flexShrink: 0,
          width: `335px !important`,
          height: `335px !important`,
          "@media screen and (min-width: 600px) and (max-width: 800px)": {
            width: `275px !important`,
            height: `275px !important`,
          },
          "&::after": {
            content: `''`,
            mixBlendMode: `multiply`,
            background: colors.greens.primary,
            opacity: `0.5`,
            width: `100%`,
            height: `100%`,
            position: `absolute`,
          },
        }}
      />
      <div
        css={{
          width: `420px`,
          margin: `20px`,
          "& > * + *": {
            marginTop: `10px`,
          },
          "@media screen and (max-width: 800px)": {
            margin: `20px 10px`,
            width: `auto`,
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
