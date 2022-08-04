import { Flex, HStack, Text } from "@chakra-ui/react";

function Digit({ digit }: { digit: string }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      paddingX={2}
      paddingY={3}
      bg="gray.800"
      borderRadius="8px"
      width="40px"
    >
      <Text fontSize="3xl" fontWeight={700}>
        {digit}
      </Text>
    </Flex>
  );
}

export function CountdownNumber({ value }: { value: number }) {
  const digits = `${value < 10 ? "0" : ""}${value.toString()}`.split("");

  return (
    <HStack>
      <Digit digit={digits[0]} />
      <Digit digit={digits[1]} />
    </HStack>
  );
}
