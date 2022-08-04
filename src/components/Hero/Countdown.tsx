import { Heading, Text, VStack } from "@chakra-ui/react";
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

      <Text fontSize="4xl" fontWeight={900}>
        8th August
      </Text>

      {/* <HStack spacing={3}>
        <CountdownNumber value={duration.days()} label="days" />
        <CountdownNumber value={duration.hours()} label="hours" />
        <CountdownNumber value={duration.minutes()} label="minutes" />
      </HStack> */}
    </VStack>
  );
}
