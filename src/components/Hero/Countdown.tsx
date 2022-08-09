import { Heading, HStack, VStack } from "@chakra-ui/react";
import { getCountdown } from "../../utils";
import { CountdownNumber } from "./CountdownNumber";

export function Countdown() {
  const { duration, hasLaunched } = getCountdown();

  // remove the counter once is launched
  if (hasLaunched) {
    return null;
  }

  return (
    <VStack spacing={3}>
      <Heading
        as="h4"
        fontWeight={900}
        textTransform="uppercase"
        fontSize="xl"
        letterSpacing="0.339em"
        color="white.200"
      >
        Launching
      </Heading>

      <HStack spacing={3}>
        <CountdownNumber value={duration.days()} label="days" />
        <CountdownNumber value={duration.hours()} label="hours" />
        <CountdownNumber value={duration.minutes()} label="minutes" />
      </HStack>
    </VStack>
  );
}
