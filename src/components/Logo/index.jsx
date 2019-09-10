/** @jsx jsx */
import { jsx } from "theme-ui"

export const Logo = ({ logoUrl, size }) => (
  <img
    sx={{
      width: size === "small" ? "30px" : "80px",
      display: "inline-block",
      margin: size === "large" ? "auto" : "0",
    }}
    src={logoUrl}
  />
)
