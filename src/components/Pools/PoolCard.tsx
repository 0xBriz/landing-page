import { ReactNode } from "react";
import {
  Flex,
  GridItem,
  GridItemProps,
  Heading,
  HeadingProps,
  Text,
} from "@chakra-ui/react";
import { PoolImage } from "./PoolImage";

interface PoolCardProps extends GridItemProps {
  icon: any;
  title: string;
  text: string;
  headingProps?: HeadingProps;
}

export function PoolCard({
  icon,
  title,
  text,
  headingProps = {},
  ...props
}: PoolCardProps) {
  return (
    <GridItem
      as={Flex}
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      {...props}
    >
      <PoolImage src={icon} alt={title} />
      <Heading
        as="h3"
        paddingTop={4}
        paddingBottom={2}
        fontSize={{ base: "3xl", lg: "4xl" }}
        fontWeight={500}
        {...headingProps}
      >
        {title}
      </Heading>
      <Text>{text}</Text>
    </GridItem>
  );
}
