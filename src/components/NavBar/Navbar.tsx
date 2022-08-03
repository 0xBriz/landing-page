import Image from "next/image";
import { HStack, Heading, Link } from "@chakra-ui/react";
import aeqLogo from "../../../public/aeq-logo.png";
import { DAppButton } from "../DAppButton";

export function NavBar() {
  return (
    <HStack
      width={"100%"}
      paddingY={8}
      paddingX={10}
      spacing={16}
      position="sticky"
      top={0}
      bg="blue"
      zIndex={10}
    >
      <HStack spacing={2} alignItems={"center"} justifyContent={"center"}>
        <Image src={aeqLogo} alt="Aequinox logo image" />
        <Heading as="h2" fontSize={"3xl"}>
          Aequinox
        </Heading>
      </HStack>

      <HStack flex={1} spacing={16}>
        <Link textStyle="navBarLink">Swap</Link>
        <Link textStyle="navBarLink">Invest</Link>
        <Link textStyle="navBarLink">Stake</Link>
      </HStack>

      <DAppButton justifySelf={"flex-end"} />
    </HStack>
  );
}
