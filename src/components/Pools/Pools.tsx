import { Flex, Heading } from "@chakra-ui/react";

export function Pools() {
  return (
    <Flex
      as="section"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h2"
        fontSize="5xl"
        fontWeight={900}
        paddingBottom={"72px"}
        textAlign="center"
        textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
      >
        Unique pool types for your needs
      </Heading>
    </Flex>
  );
}
