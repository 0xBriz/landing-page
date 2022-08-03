import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { DAppButton } from "../DAppButton";

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
      height="calc(100vh - 128px)" // 100vh - navbar height
      alignItems="center"
      justifyContent="center"
    >
      <BackgroundVideo />

      <Flex
        flexDirection="column"
        alignItems={"center"}
        zIndex={1}
        maxWidth="1100px"
        paddingX={8}
        textAlign="center"
      >
        <Heading
          as="h1"
          paddingBottom={6}
          fontWeight={900}
          fontSize={{ sm: "4xl", lg: "6xl" }}
          textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
        >
          Amplify your yield farming strategy with the Aequinox Dynamo
        </Heading>
        <Text
          paddingBottom={8}
          fontSize="18px"
          maxWidth="860px"
          textShadow={"0px 1px 0px rgba(0, 0, 0, 0.25)"}
        >
          Diversify your portfolio while boosting your favourite liquidity pools
          with extra yield through locked staking that gives you the power to
          vote to increase rewards.
        </Text>

        <HStack spacing={6}>
          <DAppButton />
          <Link
            justifySelf={"flex-end"}
            paddingX={6}
            paddingY={5}
            bg="gray.800"
            color="white.100"
            borderRadius="12px"
            fontWeight={500}
          >
            Read docs
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
