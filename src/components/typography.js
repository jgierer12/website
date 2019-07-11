import * as React from "react";

import * as colors from "~/colors";
import { inter } from "~/fonts/inter";
import { ptSerif } from "~/fonts/pt-serif";
import { Link as DefaultLink } from "~/components/link";
import { transition } from "~/transition";
import * as media from "~/media";

export const baseCss = {
  fontFamily: ptSerif,
  wordWrap: `break-word`,
  "& > * + *": {
    marginTop: `10px`,
  },
};

export const Heading = ({ level, ...props }) => {
  const As = `h${level}`;

  // prettier-ignore
  const fontSize = React.useMemo(
    () => [200, 160, 120][level - 1],
    [level]
  );

  return (
    <As
      {...props}
      css={{
        fontFamily: inter,
        fontSize: `${fontSize}%`,
        lineHeight: `1.2`,
        fontWeight: `500`,
        marginTop: `40px`,
        [media.mobile.above]: {
          fontSize: `${1.25 * fontSize}%`,
        },
      }}
    />
  );
};

export const Link = props => (
  <DefaultLink
    {...props}
    css={{
      color: colors.greens.medium,
      textDecorationLine: `underline`,
      textDecorationColor: colors.mono.light,
      ...transition(`text-decoration-color`),
      ...transition.out,
      "&:hover": {
        ...transition.in,
        textDecorationColor: colors.greens.light,
      },
    }}
  />
);

export const Quote = props => (
  <blockquote
    {...props}
    css={{
      color: colors.mono.dark,
      paddingLeft: `15px`,
      borderLeft: `5px solid ${colors.greens.light}`,
      fontStyle: `italic`,
    }}
  />
);

export const Break = () => (
  <hr
    css={{
      margin: `50px 0px !important`,
      color: colors.mono.light,
    }}
  />
);

export const List = ({ as: As = `ul`, ...props }) => (
  <As
    {...props}
    css={{
      paddingLeft: `20px`,
      listStyle: `initial`,
      listStylePosition: `outside`,
    }}
  />
);

export const OrderedList = ({ as = `ol`, ...props }) => (
  <List {...props} as={as} css={{ listStyle: `decimal` }} />
);
