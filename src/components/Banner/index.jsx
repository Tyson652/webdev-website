/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export const Banner = ({ backgroundImageUrl }) => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: `cover`,
      backgroundPosition: "center",
      height: 300,
      margin: 0
    }}
  />
);
