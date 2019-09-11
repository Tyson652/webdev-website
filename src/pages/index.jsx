/** @jsx jsx */
import { useState } from "react"
import { jsx, Layout, Styled, Box, Flex } from "theme-ui"
import { Global, css } from "@emotion/core"
import { HeaderNav } from "../components"

export default () => {
  let links = [
    { description: "Avatar", href: "/component-libray/avatar/" },
    { description: "Banner", href: "/component-libray/banner/" },
    { description: "EventCard", href: "/component-libray/eventCard/" },
    { description: "Footer", href: "/component-libray/footer/" },
    { description: "FooterLinkGroup", href: "/component-libray/footerLinkGroup/" },
    { description: "HeaderNav", href: "/component-libray/headerNav/" },
    { description: "HeroEvent", href: "/component-libray/heroEvent/" },
    { description: "IconButton", href: "/component-libray/iconButton/" },
    { description: "LinkIcon", href: "/component-libray/linkIcon/" },
    { description: "Logo", href: "/component-libray/logo/" },
    { description: "Map", href: "/component-libray/map/" },
    { description: "MapDescription", href: "/component-libray/mapDescription/" },
    { description: "NextEvent", href: "/component-libray/nextEvent/" },
    { description: "OrganiserRow", href: "/component-libray/organisersRow/" },
    { description: "PageInformation", href: "/component-libray/pageInformation/" },
    { description: "PageLayout", href: "/component-libray/pageLayout/" },
    { description: "PaginationButtons", href: "/component-libray/paginationButtons/" },
    { description: "Quote", href: "/component-libray/quote/" },
    { description: "SlideShow", href: "/component-libray/slideShow/" },
    { description: "SocialIcon", href: "/component-libray/socialIcon/" },
    { description: "SponsorsRow", href: "/component-libray/sponsorsRow/" },
    { description: "TalksList", href: "/component-libray/talksList/" },
  ]

  const [component, setComponent] = useState("/component-libray/avatar/")

  const toggleComponent = href => {
    console.log(href)
    setComponent(href)
    return component
  }

  const [windowHeight, setWindowHeight] = useState(document.documentElement.clientHeight - 77)
  window.onresize = () => {
    setWindowHeight(document.documentElement.clientHeight - 77)
  }

  const BurgerLink = ({ children }) => (
    <Box
      sx={{
        variant: "borderStyles.veryLightBorderTop",
        width: "100%",
        padding: 16,
      }}
    >
      <Styled.p
        sx={{
          display: "inline",
          variant: "linkStyles.buttonDefault",
          color: "brandDark",
          marginX: 64,
          marginY: 8,
          padding: 4,
          fontWeight: 2,
          "&:hover": {
            color: "background",
            backgroundColor: "elixirLight",
            variant: "boxShadowStyles.mediumShadow",
          },
        }}
      >
        {children}
      </Styled.p>
    </Box>
  )

  return (
    <Styled.root>
      <Layout sx={{ width: "100vw" }}>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <HeaderNav />
        <Flex>
          <Box sx={{ width: 300, height: windowHeight, overflow: 'scroll' }}>
            <Flex
              sx={{
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
                zIndex: 5,
              }}
            >
              {links.map((link, i) => {
                // console.log(link)
                return (
                  <Box
                    key={i}
                    href={link.href}
                    sx={{ textDecoration: "none" }}
                    onClick={() => toggleComponent(link.href)}
                  >
                    <BurgerLink>{link.description}</BurgerLink>
                  </Box>
                )
              })}
            </Flex>
          </Box>
          <iframe src={component} width="500px" height={windowHeight} />
        </Flex>
      </Layout>
    </Styled.root>
  )
}
