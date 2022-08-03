import { Flex, FlexProps } from "@chakra-ui/react";

export function Container(props: FlexProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="blue"
      color="white"
      {...props}
    />
  );
}
