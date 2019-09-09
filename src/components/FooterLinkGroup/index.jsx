/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui";

export const FooterLinkGroup = () => (
  <FooterComplete>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
  </FooterComplete>
);

const Heading = ({ children }) => (
  <Styled.p
    sx={{
      padding: 0,
      margin: 0,
      variant: "textStyles.heading",
      color: "mutedText",
      fontSize: [16, 16, 20],
      marginBottom: [8],
      fontWeight: "body"
    }}
  >
    {children}
  </Styled.p>
);

const FooterComplete = ({ children }) => (
  <Flex
    sx={{
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingTop: 4
    }}
  >
    {children}
  </Flex>
);

const FooterLinkList = ({ children }) => (
  <Box sx={{ marginRight: 64, marginBottom: 24 }}>{children}</Box>
);

const FooterLink = ({ href, children }) => (
  <Styled.a
    sx={{
      display: "block",
      marginBottom: [4, 4, 8],
      fontSize: [14, 14, 16],
      textDecoration: "none",
      "&:hover": {
        color: "primary"
      }
    }}
  >
    {children}
  </Styled.a>
);
