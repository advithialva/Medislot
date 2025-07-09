export function convertToMinutes(time: string): number {
  const [raw, suffix] = time.toLowerCase().split(/(am|pm)/).filter(Boolean);
  const [hourStr, minStr] = raw.split(':');
  let hour = parseInt(hourStr, 10);
  const minutes = parseInt(minStr, 10);

  if (suffix === 'pm' && hour !== 12) hour += 12;
  if (suffix === 'am' && hour === 12) hour = 0;

  return hour * 60 + minutes;
}

export function normalizeTime(time: string): string {
  const minutes = convertToMinutes(time);
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const paddedMinute = minute.toString().padStart(2, '0');
  return `${hour12}:${paddedMinute}${suffix}`;
}


export const convertMinutesToTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m.toString().padStart(2, '0')}${suffix.toLowerCase()}`;
};
