import { Heading, HStack, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { CountdownNumber } from "./CountdownNumber";

dayjs.extend(duration);

const COUNTDOWN_DATE = "2022-08-08T12:00:00Z";

export function Countdown() {
  const now = dayjs();
  const countdown = dayjs(COUNTDOWN_DATE);
  const duration = dayjs.duration(countdown.diff(now));

  // remove the counter once is launched
  if (
    duration.days() < 0 ||
    duration.hours() < 0 ||
    duration.minutes() < 0 ||
    duration.seconds() < 0
  ) {
    return null;
  }

  return (
    <VStack spacing={6}>
      <Heading
        as="h4"
        fontWeight={900}
        textTransform="uppercase"
        fontSize="xl"
        letterSpacing="0.339em"
        color="white.200"
      >
        Launching in
      </Heading>

      <HStack spacing={3}>
        <CountdownNumber value={duration.days()} />
        <CountdownNumber value={duration.hours()} />
        <CountdownNumber value={duration.minutes()} />
      </HStack>
    </VStack>
  );
}
