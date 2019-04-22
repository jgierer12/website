import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import TwitterIcon from "boxicons/svg/logos/bxl-twitter.svg";
import GitHubIcon from "boxicons/svg/logos/bxl-github.svg";
import EmailIcon from "boxicons/svg/solid/bxs-envelope.svg";

import * as colors from "../colors";
import { Layout } from "../components/layout";

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar-grayscale.jpg" }) {
      childImageSharp {
        fixed(width: 335, height: 335, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const SocialLink = ({ icon: Icon, label, ...props }) => (
  <li>
    <a
      {...props}
      aria-label={label}
      css={{
        color: colors.greens.light,
        transition: `color 0.2s ease-in-out`,
        "&:hover": {
          color: colors.greens.dark,
        },
      }}
    >
      <Icon role="img" fill="currentColor" width="50px" height="50px" />
    </a>
  </li>
);

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
    <main
      css={{
        minHeight: `100%`,
        padding: `2rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        "@media screen and (max-width: 900px)": {
          flexDirection: `column`,
        },
      }}
    >
      <Img
        fixed={data.file.childImageSharp.fixed}
        css={{
          borderRadius: `50%`,
          flexShrink: 0,
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
          width: `15rem`,
          marginLeft: `1rem`,
          marginTop: `1rem`,
          "& > * + *": {
            marginTop: `0.5rem`,
          },
        }}
      >
        <p>Hi! My name is</p>
        <h1
          css={{
            fontSize: `1.7rem`,
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
        <ul
          css={{
            marginTop: `1rem`,
            display: `flex`,
            "& > * + *": {
              marginLeft: `2rem`,
            },
          }}
        >
          <SocialLink
            href="https://twitter.com/jgierer12"
            label="Visit my Twitter profile"
            icon={TwitterIcon}
          />
          <SocialLink
            href="https://github.com/jgierer12"
            label="Visit my GitHub profile"
            icon={GitHubIcon}
          />
          <SocialLink
            href="mailto:hello@jonasgierer.com"
            label="Send me an email"
            icon={EmailIcon}
          />
        </ul>
      </div>
    </main>
  </Layout>
);
