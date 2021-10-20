import React, { PropsWithChildren } from "react";
import { Link, LinkBoxProps } from "@chakra-ui/react";
import LinkNext from "next/link";
import { LinkProps } from "next/link";
import { SafeAny } from "@app/common/@types";
type LinkNextProps = PropsWithChildren<LinkProps & LinkBoxProps>;
function NextLink({ href, passHref, children, ...props }: LinkNextProps) {
  return (
    <LinkNext href={href} passHref={passHref}>
      <Link as="a" {...(props as SafeAny)}>
        {children}
      </Link>
    </LinkNext>
  );
}

export default NextLink;
