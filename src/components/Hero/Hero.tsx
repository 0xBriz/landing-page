import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { DOCS_HREF } from "../../links";
import { BigWhiteLink } from "../BigWhiteLink";
import { Countdown } from "./Countdown";

function BackgroundVideo() {
  return (
    <Box position="absolute" top={0} left={0} width="100%" height="100%">
      <video autoPlay loop muted style={{ height: "100%" }}>
        <source src="/aeq-video-background.mp4" />
      </video>
    </Box>
  );
}

export function Hero() {
  return (
    <Flex
      as="section"
      position="relative"
      width="100%"
      height="calc(100vh - 107px)" // 100vh - navbar height
      alignItems="center"
      justifyContent="center"
      marginBottom="144px"
    >
      <BackgroundVideo />

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
          Amplify your yield farming strategy with the Aequinox Dynamo
        </Heading>
        <Text
          paddingBottom={{ base: 12, md: 8 }}
          fontSize="18px"
          maxWidth="860px"
          textShadow={"0px 1px 0px rgba(0, 0, 0, 0.25)"}
        >
          Diversify your portfolio while boosting your favourite liquidity pools
          with extra yield through locked staking that gives you the power to
          vote to increase rewards.
        </Text>

        <VStack spacing={10}>
          <Countdown />
          <BigWhiteLink width="100%" href={DOCS_HREF} isExternal>
            Read docs
          </BigWhiteLink>
        </VStack>
      </Flex>
    </Flex>
  );
}
