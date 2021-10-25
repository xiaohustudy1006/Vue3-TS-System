import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)
const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"
export function formatUtcTime(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs(utcString).format(format)
}
