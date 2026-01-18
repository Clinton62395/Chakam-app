import { useWindowDimensions } from "react-native";

/**
 * Custom hook for responsive design
 * @returns {Object} - Responsive breakpoints and dimensions
 */
export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  return {
    // Dimensions
    width,
    height,

    // Breakpoints
    isSmall: width < 400,
    isMedium: width >= 400 && width < 768,
    isTablet: width >= 768,
    isLargeTablet: width >= 1024,

    // Orientation
    isPortrait: height > width,
    isLandscape: width > height,

    // Helper functions
    isDevice: (type) => {
      switch (type) {
        case "small":
          return width < 400;
        case "medium":
          return width >= 400 && width < 768;
        case "tablet":
          return width >= 768;
        case "large":
          return width >= 1024;
        default:
          return false;
      }
    },
  };
};
