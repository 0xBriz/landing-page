import { HStack, Link } from "@chakra-ui/react";
import { DAppButton } from "../DAppButton";
import { Logo } from "../Logo";

export function NavBar() {
  return (
    <HStack
      as="nav"
      width={"100%"}
      paddingY={8}
      paddingX={10}
      spacing={16}
      position="sticky"
      top={0}
      bg="blue"
      zIndex={10}
    >
      <Logo />

      <HStack flex={1} spacing={16}>
        <Link textStyle="navBarLink">Swap</Link>
        <Link textStyle="navBarLink">Invest</Link>
        <Link textStyle="navBarLink">Stake</Link>
      </HStack>

      <DAppButton justifySelf={"flex-end"} />
    </HStack>
  );
}
