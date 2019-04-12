import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Global } from "@emotion/core";
import Img from "gatsby-image";
import "destyle.css";
import "typeface-inter";
import TwitterIcon from "boxicons/svg/logos/bxl-twitter.svg";
import GitHubIcon from "boxicons/svg/logos/bxl-github.svg";
import EmailIcon from "boxicons/svg/solid/bxs-envelope.svg";

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
        color: `#A2AC9A`,
        transition: `color 0.2s ease-in-out`,
        "&:hover": {
          color: `#647753`,
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
      color: `#85927A`,
      fontWeight: `500`,
      fontStyle: `normal`,
    }}
  >
    {children}
  </em>
);

export default ({ data }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Jonas Gierer</title>
      <meta
        name="description"
        content="Hi! My name is Jonas Gierer. I love creating modern and accessible websites and apps using JavaScript, React and other awesome technologies."
      />
    </Helmet>
    <Global
      styles={{
        html: {
          "&, body, #___gatsby, #___gatsby > div": {
            height: `100%`,
            width: `100%`,
          },
          fontSize: `28px`,
          lineHeight: `1.3`,
          "@media screen and (max-width: 900px)": {
            fontSize: `22px`,
          },
        },
      }}
    />
    <main
      css={{
        minHeight: `100%`,
        padding: `2rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontFamily: `Inter`,
        color: `#484A47`,
        "@media screen and (max-width: 900px)": {
          flexDirection: `column`,
        },
        "& ::selection": {
          background: `#484A47`,
          color: `white`,
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
            background: `#BCE999`,
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
            color: `#647753`,
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
  </>
);
