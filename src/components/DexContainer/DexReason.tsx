import Image from "next/image";
import { Text, HStack } from "@chakra-ui/react";

export function DexReason({
  index,
  text,
  icon,
  visible,
}: {
  index: number;
  text: string;
  icon: any;
  visible: boolean;
}) {
  return (
    <HStack
      spacing={4}
      padding={6}
      bg="gray.900"
      borderRadius="24px"
      borderWidth="1px"
      borderColor="gray.800"
      boxShadow="0px 2px 24px rgba(96, 43, 30, 0.25)"
      opacity={visible ? 1 : 0}
      transform={visible ? "translateY(0)" : "translateY(75px)"}
      transition={`opacity 0.2s ease-in ${
        index * 0.2
      }s, transform 0.4s ease-in ${index * 0.2}s`}
    >
      <Image src={icon} alt="Chart icon" />

      <Text fontSize="18px" fontWeight={700}>
        {text}
      </Text>
    </HStack>
  );
}
