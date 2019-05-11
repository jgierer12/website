import * as React from "react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

import * as Typography from "~/components/typography";
import { Code } from "~/components/code";
import { PTSerifPreload } from "~/fonts/pt-serif";
import { usePostContext } from "~/contexts/post";

export const query = graphql`
  fragment PostFull_Body on Mdx {
    code {
      body
    }
  }
`;

const MdxCode = ({
  children: {
    props: { className, ...props },
  },
}) => {
  const language = className && className.split(`-`)[1];
  return (
    <Code
      {...props}
      language={language}
      is="block"
      css={{ margin: `20px -20px` }}
    />
  );
};

export const PostBody = () => {
  const mdx = usePostContext();

  return (
    <>
      <PTSerifPreload />
      <article
        css={{
          ...Typography.baseCss,
          gridColumn: `3`,
          gridRow: `4`,
          padding: `20px`,
        }}
      >
        <MDXProvider
          components={{
            a: Typography.Link,
            inlineCode: Code,
            pre: MdxCode,
            blockquote: Typography.Quote,
            h1: props => <Typography.Heading level={1} {...props} />,
            h2: props => <Typography.Heading level={2} {...props} />,
            h3: props => <Typography.Heading level={3} {...props} />,
            hr: Typography.Break,
            ul: Typography.List,
            ol: Typography.OrderedList,
          }}
        >
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </>
  );
};
