export function dateFormater({
  date,
  lang = "es",
}: {
  date: Date | string;
  lang?: string;
}) {
  const { format } = new Intl.DateTimeFormat(lang, {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  if (date instanceof Date) return format(date);

  return format(new Date(date));
}
