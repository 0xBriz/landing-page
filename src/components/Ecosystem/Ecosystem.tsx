import { Flex, Heading, Stack } from "@chakra-ui/react";
import aaltoBg from "../../../public/aalto-bg.png";
import amesBg from "../../../public/ames-bg.png";
import { AALTO_HREF, AMES_HREF } from "../../links";
import { ProtocolCard } from "./ProtocolCard";

export function Ecosystem() {
  return (
    <Flex
      as="section"
      zIndex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom="144px"
    >
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight={900}
        paddingBottom={"72px"}
        textAlign="center"
        textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
      >
        Featured Ecosystem Protocols
      </Heading>

      <Stack direction={{ base: "column", sm: "row" }} spacing={6}>
        <ProtocolCard
          image={aaltoBg}
          title="Aalto Protocol"
          text="Aalto Protocol is the most advanced and sustainable auto-rebase protocol on the Binance Smart Chain, with auto-liquidity on every transaction, auto-burn every 24hrs, stablecoin payouts."
          link={AALTO_HREF}
        />
        <ProtocolCard
          image={amesBg}
          title="Ames.defi"
          text="Farm ASHARE and earn rewards in our seignorage stablecoin ecosystem."
          link={AMES_HREF}
        />
      </Stack>
    </Flex>
  );
}
