import { PropsWithChildren } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { LinkProps, Link } from "@chakra-ui/react";

export function BigWhiteLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <Link
      paddingX={6}
      paddingY={5}
      bg="white.100"
      color="black"
      borderRadius="12px"
      fontWeight={500}
      {...props}
    >
      {children}
      <ArrowForwardIcon marginLeft={4} />
    </Link>
  );
}
