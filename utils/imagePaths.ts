/**
 * Utility function to construct proper image paths based on environment
 * This ensures images work correctly in both development and production (GitHub Pages)
 */
export const getImagePath = (imageName: string): string => {
  // Ensure path starts with a slash and doesn't include '/images/' prefix
  const cleanImageName = imageName.replace(/^\/images\//, "");

  // Add the correct prefix based on environment
  return `${
    process.env.NODE_ENV === "production" ? "/DevPatel.com" : ""
  }/images/${cleanImageName}`;
};
