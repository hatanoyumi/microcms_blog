import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs"; // 追加
import timezone from "dayjs/plugin/timezone"; // 追加
import utc from "dayjs/plugin/utc"; // 追加

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ↓追加↓
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
  return formattedDate;
};