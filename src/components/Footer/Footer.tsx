import {
  Flex,
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AALTO_HREF,
  AMES_HREF,
  DISCORD_HREF,
  DOCS_HREF,
  INVEST_HREF,
  MEDIUM_HREF,
  STAKE_HREF,
  TELEGRAM_HREF,
  TRADE_HREF,
  TWITTER_HREF,
} from "../../links";
import { getCountdown } from "../../utils";
import { Logo } from "../Logo";

function Pages() {
  const { hasLaunched } = getCountdown();

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      width="100%"
      justifyContent="space-between"
      spacing={8}
    >
      {hasLaunched && (
        <VStack spacing={4} alignItems="flex-start">
          <Text fontWeight={900}>Aequinox</Text>
          <Link isExternal href={TRADE_HREF}>
            Trade
          </Link>
          <Link isExternal href={INVEST_HREF}>
            Invest
          </Link>
          <Link isExternal href={STAKE_HREF}>
            Stake
          </Link>
          <Link isExternal href={DOCS_HREF}>
            Docs
          </Link>
        </VStack>
      )}

      <VStack spacing={4} alignItems="flex-start">
        <Text fontWeight={900}>Ecosystem</Text>
        <Link href={AMES_HREF} isExternal>
          Ames.defi
        </Link>
        <Link href={AALTO_HREF} isExternal>
          Aalto Protocol
        </Link>
      </VStack>

      <VStack spacing={4} alignItems="flex-start">
        <Text fontWeight={900}>Social</Text>
        <Link href={DISCORD_HREF} isExternal>
          Discord
        </Link>
        <Link href={TWITTER_HREF} isExternal>
          Twitter
        </Link>
        <Link href={TELEGRAM_HREF} isExternal>
          Telegram
        </Link>
        <Link href={MEDIUM_HREF} isExternal>
          Medium
        </Link>
      </VStack>
    </Stack>
  );
}

export function Footer() {
  return (
    <Grid
      as="section"
      templateRows={{ base: "1fr", md: "1fr" }}
      templateColumns={{ base: "1fr", md: "4fr 2fr" }}
      columnGap="80px"
      rowGap={12}
    >
      <GridItem as={Flex} flexDirection="column" alignItems="flex-start">
        <Logo flex={1} alignItems="flex-start" marginBottom={4} />
        <Text>
          Copyright © {new Date().getFullYear()} Aequinox. All rights reserved.
        </Text>
      </GridItem>

      <GridItem>
        <Pages />
      </GridItem>
    </Grid>
  );
}
