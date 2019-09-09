/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"

export const Map = ({ srcUrl, address }) => (
  <Flex
    sx={{
      variant: "boxShadowStyles.lightShadow",
      minWidth: [300, 300, 300],
      maxWidth: [300, 300, 300],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      borderRadius: 6,
      overflow: "hidden",
      backgroundColor: "background",
    }}
  >
    <Box
      as="iframe"
      title="iframe-map"
      src={srcUrl}
      frameBorder="0"
      allowFullScreen={true}
      sx={{
        height: [300, 300, 300],
        width: [300, 300, 300],
      }}
    />
    <Styled.p
      sx={{
        margin: 0,
        fontSize: 14,
        fontWeight: "heading",
        textAlign: "center",
        color: "mutedText",
        paddingY: 16,
        fontFamily: "modern",
      }}
    >
      {address}
    </Styled.p>
  </Flex>
)
