/** @jsx jsx */
import { jsx, Box, Styled, Flex, Container } from "theme-ui"
import SponsorsRowYaml from "./sponsorsRowYaml.yaml"

export const SponsorsGroup = ({ sponsors }) => {
  return (
    <Container>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          marginTop: 32,
        }}
      >
        <Heading>{SponsorsRowYaml.sponsorsTitle}</Heading>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: ["null", "center", "center"],
            flexDirection: ["column", "row", "row"],
            flexWrap: "wrap",
          }}
        >
          {sponsors.map((sponsor, i) => (
            <Box key={i} sx={{ minWidth: "33.3%" }}>
              <Styled.a href={sponsor.websiteUrl}>
                <Styled.img
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name}`}
                  sx={{
                    width: 256,
                    margin: 4,
                  }}
                />
              </Styled.a>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}

const Heading = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      marginBottom: [24, 8, 8],
      variant: "textStyles.body",
      fontSize: 36,
      fontWeight: "body",
    }}
  >
    {children}
  </Styled.p>
)
