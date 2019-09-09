/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"
import { Container } from "theme-ui"
import PageInformationYaml from "./pageInformationYaml.yaml"

export const PageInformation = () => {
  const { heading1, paragraph1 } = PageInformationYaml
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", marginTop: [24, 0, 0] }}>
        <Heading>{heading1}</Heading>
        <Flex
          sx={{
            width: "100%",
            flexDirection: ["column", "row", "row"],
          }}
        >
          <Paragraph>{paragraph1}</Paragraph>
        </Flex>
      </Box>
    </Container>
  )
}

const Paragraph = ({ children }) => (
  <Flex
    sx={{
      paddingLeft: 16,
      textAlign: "center",
      flexDirection: "column",
      fontFamily: "body",
      marginX: [0, 0, 90],
      marginBottom: 40,
    }}
  >
    {children}
  </Flex>
)

const Heading = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      textAlign: "center",
      fontSize: [36, 24, 36],
      variant: "textStyles.heading",
      marginY: 50,
      fontFamily: "body",
      fontWeight: "normal",
    }}
  >
    {children}
  </Styled.p>
)
