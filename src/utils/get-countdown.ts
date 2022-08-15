import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useInterval } from "react-use";

dayjs.extend(duration);

const COUNTDOWN_DATE = "2022-08-15T18:00:00Z";

export function useCountdown() {
  const now = dayjs();
  const countdown = dayjs(COUNTDOWN_DATE);
  const duration = dayjs.duration(countdown.diff(now));
  const [time, setTime] = useState(duration);

  useInterval(() => {
    setTime(dayjs.duration(countdown.diff(now)));
  }, 1000);

  return {
    duration: time,
    hasLaunched:
      time.days() < 0 ||
      time.hours() < 0 ||
      time.minutes() < 0 ||
      time.seconds() < 0,
  };
}
