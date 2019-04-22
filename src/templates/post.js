import * as React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;

export default ({ data: { mdx } }) => {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  );
};
