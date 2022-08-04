import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "../Logo";

// function Pages() {
//   return (
//     <Grid
//       templateRows={{ base: "1fr", md: "repeat(5, 1fr)" }}
//       templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
//       columnGap="5vw"
//       rowGap={4}
//     >
//       <GridItem as={Text} fontWeight={900}>
//         Aequinox
//       </GridItem>
//       <GridItem as={Text} fontWeight={900}>
//         Core
//       </GridItem>
//       <GridItem as={Text} fontWeight={900}>
//         Social
//       </GridItem>

//       <GridItem as={Link} isExternal>
//         Trade
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         Trade
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         Discord
//       </GridItem>

//       <GridItem as={Link} isExternal>
//         Invest
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         Invest
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         Twitter
//       </GridItem>

//       <GridItem as={Link} isExternal>
//         Stake
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         &nbsp;
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         Telegram
//       </GridItem>

//       <GridItem as={Link} isExternal>
//         Docs
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         &nbsp;
//       </GridItem>
//       <GridItem as={Link} isExternal>
//         Medium
//       </GridItem>
//     </Grid>
//   );
// }
function Pages() {
  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      width="100%"
      justifyContent="space-between"
      spacing={8}
    >
      <VStack spacing={4} alignItems="flex-start">
        <Text fontWeight={900}>Aequinox</Text>
        <Link isExternal>Trade</Link>
        <Link isExternal>Invest</Link>
        <Link isExternal>Stake</Link>
        <Link isExternal>Docs</Link>
      </VStack>

      <VStack spacing={4} alignItems="flex-start">
        <Text fontWeight={900}>Core</Text>
        <Link isExternal>Trade</Link>
        <Link isExternal>Invest</Link>
        <Link isExternal>&nbsp;</Link>
        <Link isExternal>&nbsp;</Link>
      </VStack>

      <VStack spacing={4} alignItems="flex-start">
        <Text fontWeight={900}>Social</Text>
        <Link isExternal>Discord</Link>
        <Link isExternal>Twitter</Link>
        <Link isExternal>Telegram</Link>
        <Link isExternal>Medium</Link>
      </VStack>
    </Stack>
  );
}

export function Footer() {
  return (
    <Grid
      as="section"
      templateRows={{ base: "1fr", md: "1fr" }}
      templateColumns={{ base: "1fr", md: "2fr 3fr" }}
      columnGap="80px"
      rowGap={12}
    >
      <GridItem as={Flex} flexDirection="column" alignItems="flex-start">
        <Logo flex={1} alignItems="flex-start" marginBottom={4} />
        <Text>
          Copyright © {new Date().getFullYear()} Aequinox.All rights reserved.
        </Text>
      </GridItem>

      <GridItem>
        <Pages />
      </GridItem>
    </Grid>
  );
}
