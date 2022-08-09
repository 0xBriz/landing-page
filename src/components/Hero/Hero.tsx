import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { DOCS_HREF } from "../../links";
import { BigWhiteLink } from "../BigWhiteLink";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <Flex
      as="section"
      position="relative"
      width="100%"
      minHeight="calc(100vh - 107px)" // 100vh - navbar height
      alignItems="center"
      justifyContent="center"
      marginBottom="50px"
      _after={{
        content: "''",
        position: "absolute",
        bottom: 0,
        width: "100vw",
        height: "100px",
        transform: "translateY(50%)",
        background:
          "linear-gradient(180deg, rgba(7,11,37,0) 0%, rgba(7,13,33,0.5004595588235294) 25%, rgba(7,13,33,1) 100%)",
      }}
    >
      <Flex
        flexDirection="column"
        alignItems={"center"}
        zIndex={1}
        maxWidth="1100px"
        paddingX={{ base: 0, sm: 8 }}
        textAlign="center"
      >
        <Heading
          as="h1"
          paddingBottom={6}
          fontWeight={900}
          fontSize={{ base: "4xl", lg: "6xl" }}
          textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
        >
          Amplify your yield with the Aequinox Dynamo
        </Heading>
        <Text
          paddingBottom={{ base: 12, md: 8 }}
          fontSize="18px"
          maxWidth="860px"
          textShadow={"0px 1px 0px rgba(0, 0, 0, 0.25)"}
        >
          Diversify your portfolio and direct emissions to your favourite
          liquidity pools with veAEQ gauge voting.
        </Text>

        <VStack spacing={10}>
          {/* <Countdown /> */}
          <BigWhiteLink width="100%" href={DOCS_HREF} isExternal>
            Read docs
          </BigWhiteLink>
        </VStack>
      </Flex>
    </Flex>
  );
}
