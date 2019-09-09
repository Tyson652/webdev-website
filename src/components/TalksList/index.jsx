/** @jsx jsx */
import { jsx, Box, Styled, Flex, Container } from "theme-ui"
import TalksListYaml from "./talksListYaml.yaml"
import { Talk } from "../Talk/index"

export const TalksList = ({ talks }) => {
  const { title, line1, line2, email } = TalksListYaml.talks
  return (
    <Flex
      sx={{
        backgroundColor: "lightness",
        justifyContent: "center",
      }}
    >
      <Container sx={{ justifyContent: "center" }}>
        <Box sx={{ marginTop: 24 }}>
          <Heading>{title}</Heading>
          <Box>
            {talks &&
              talks.map((talk, index) => <Talk key={index} {...talk} />)}
            <EmailActionBox>
              <Title>{line1}</Title>
              <SecondaryTitle>
                {line2}
                <Styled.a
                  sx={{
                    textDecoration: "none",
                    color: "mutedText",
                    fontWeight: "bold",
                  }}
                  href={`mailto:${email}`}
                >
                  {email}
                </Styled.a>
              </SecondaryTitle>
            </EmailActionBox>
          </Box>
        </Box>
      </Container>
    </Flex>
  )
}

const Heading = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.body",
      textAlign: "center",
      fontSize: 36,
      fontWeight: "body",
    }}
  >
    {children}
  </Styled.p>
)

const EmailActionBox = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      alignItems: "center",
      paddingX: 16,
      paddingY: 64,
      textAlign: "center",
      marginTop: 16,
    }}
  >
    {children}
  </Flex>
)

const Title = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.modern",
      color: "mutedText",
      fontSize: 24,
      fontWeight: "bold",
    }}
  >
    {children}
  </Styled.p>
)

const SecondaryTitle = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      fontFamily: "modern",
      color: "mutedText",
      fontSize: 16,
    }}
  >
    {children}
  </Styled.p>
)
