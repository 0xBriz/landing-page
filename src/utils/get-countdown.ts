import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const COUNTDOWN_DATE = "2022-08-15T18:00:00Z";

export function getCountdown() {
  const now = dayjs();
  const countdown = dayjs(COUNTDOWN_DATE);
  const duration = dayjs.duration(countdown.diff(now));

  return {
    duration,
    hasLaunched:
      duration.days() < 0 ||
      duration.hours() < 0 ||
      duration.minutes() < 0 ||
      duration.seconds() < 0,
  };
}
