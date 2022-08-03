import { ArrowForwardIcon } from "@chakra-ui/icons";
import { LinkProps, Link } from "@chakra-ui/react";

export function DAppButton(props: LinkProps) {
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
      Open dApp
      <ArrowForwardIcon marginLeft={4} />
    </Link>
  );
}
