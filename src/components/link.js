import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

export const Link = ({ to, ...props }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  if (isInternal) {
    return <GatsbyLink to={to} {...props} />;
  }
  const { activeClassName, partiallyActive, ...safeProps } = props;
  return <a href={to} {...safeProps} />;
};
