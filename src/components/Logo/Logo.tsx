import Image from "next/image";
import { HStack, StackProps, Flex, Spacer } from "@chakra-ui/react";
import aeqLogo from "../../../public/aeq-logo.png";
import aeq from "../../../public/aequinox.svg";

export function Logo(props: StackProps) {
  return (
    <HStack
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      {...props}
    >
      <Flex justifyContent="center" alignItems="center">
        <Image src={aeqLogo} alt="Aequinox logo image" layout="fixed" />
        <Spacer width={2} />
        <Image src={aeq} alt="Aequinox logo image" layout="fixed" />
      </Flex>
    </HStack>
  );
}
