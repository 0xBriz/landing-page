import Image from "next/image";
import { HStack, Heading, StackProps } from "@chakra-ui/react";
import aeqLogo from "../../../public/aeq-logo.png";

export function Logo(props: StackProps) {
  return (
    <HStack
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      {...props}
    >
      <Image src={aeqLogo} alt="Aequinox logo image" layout="fixed" />
      <Heading as="h2" fontSize={"3xl"}>
        Aequinox
      </Heading>
    </HStack>
  );
}
