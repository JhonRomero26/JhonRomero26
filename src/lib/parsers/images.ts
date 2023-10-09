export const parseImageSources = (imagesSet?: { [index: string]: string }): string => {
  if (!imagesSet) return "";
  const result = Object.entries(imagesSet).map(
    ([key, value]) => `${value} ${key}`,
  );

  return result.join(", ");
};