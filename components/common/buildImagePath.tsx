export const buildImagePath = (
  src: string | undefined,
  isMobile: boolean
): string => {
  const fallback = "/images/home-images/additional/offset_printing_right.webp";
  const path = src ? `/images/${src}` : fallback;

  if (!isMobile) return path;
  return path.replace(/(\.[a-zA-Z0-9]+)$/i, "_64$1");
};
