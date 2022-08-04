import { Flex, HStack, Text, VStack } from "@chakra-ui/react";

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

interface CountdownNumberProps {
  value: number;
  label: string;
}

export function CountdownNumber({ value, label }: CountdownNumberProps) {
  const digits = `${value < 10 ? "0" : ""}${value.toString()}`.split("");

  return (
    <VStack>
      <HStack>
        <Digit digit={digits[0]} />
        <Digit digit={digits[1]} />
      </HStack>

      <Text fontSize={"small"}>{label}</Text>
    </VStack>
  );
}
