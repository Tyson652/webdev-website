/** @jsx jsx */
import { useState } from "react"
import { jsx, Layout, Styled, Box, Flex } from "theme-ui"
import { Global, css } from "@emotion/core"
import { HeaderNav } from "../components"
import { Link } from "gatsby"

export default () => {
  let links = [
    { description: "Avatar", href: "/component-libray/avatar/", text: "/component-libray/avatar/avatarText/"},
    { description: "Banner", href: "/component-libray/banner/", text: "/component-libray/banner/bannerText/" },
    { description: "EventCard", href: "/component-libray/eventCard/", text: "/component-libray/eventCard/eventCardText/" },
    { description: "Footer", href: "/component-libray/footer/", text: "/component-libray/footer/footerText/" },
    { description: "FooterLinkGroup", href: "/component-libray/footerLinkGroup/", text: "/component-libray/footerLinkGroup/footerLinkGroupText/" },
    { description: "HeaderNav", href: "/component-libray/headerNav/", text: "/component-libray/headerNav/headerNavText/" },
    { description: "HeroEvent", href: "/component-libray/heroEvent/", text: "/component-libray/heroEvent/heroEventText/" },
    { description: "IconButton", href: "/component-libray/iconButton/", text: "/component-libray/iconButton/iconButtonText/" },
    { description: "LinkIcon", href: "/component-libray/linkIcon/", text: "/component-libray/linkIcon/linkIconText/" },
    { description: "Logo", href: "/component-libray/logo/", text: "/component-libray/logo/logoText/" },
    { description: "Map", href: "/component-libray/map/", text: "/component-libray/map/mapText/" },
    { description: "MapDescription", href: "/component-libray/mapDescription/", text: "/component-libray/mapDescription/mapDescriptionText/" },
    { description: "NextEvent", href: "/component-libray/nextEvent/", text: "/component-libray/nextEvent/nextEventText/" },
    { description: "OrganiserRow", href: "/component-libray/organisersRow/", text: "/component-libray/organisersRow/organisersRowText/" },
    { description: "PageInformation", href: "/component-libray/pageInformation/", text: "/component-libray/pageInformation/pageInformationText/" },
    { description: "PageLayout", href: "/component-libray/pageLayout/", text: "/component-libray/pageLayout/pageLayoutText/" },
    { description: "PaginationButtons", href: "/component-libray/paginationButtons/", text: "/component-libray/paginationButtons/paginationButtonsText/" },
    { description: "Quote", href: "/component-libray/quote/", text: "/component-libray/quote/quoteText/" },
    { description: "SlideShow", href: "/component-libray/slideShow/", text: "/component-libray/slideShow/slideShowText/" },
    { description: "SocialIcon", href: "/component-libray/socialIcon/", text: "/component-libray/socialIcon/socialIconText/" },
    { description: "SponsorsRow", href: "/component-libray/sponsorsRow/", text: "/component-libray/sponsorsRow/sponsorsRowText/" },
    { description: "TalksList", href: "/component-libray/talksList/", text: "/component-libray/talksList/talksListText/" },
  ]

  const [component, setComponent] = useState("/component-libray/avatar/")
  const [text, setText] = useState("/component-libray/avatar/avatarText/")

  const toggleComponent = (href, text) => {
    console.log(href)
    setComponent(href)
    setText(text)
    return component
  }

  const [windowHeight, setWindowHeight] = useState(
    document.documentElement.clientHeight - 77
  )
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
          <Box sx={{ width: 300, height: windowHeight, overflow: "scroll" }}>
            <Flex
              sx={{
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
                zIndex: 5,
              }}
            >
              {links.map((link, i) => {
                return (
                  <Box
                    key={i}
                    href={link.href}
                    text={link.text}
                    sx={{ textDecoration: "none" }}
                    onClick={() => toggleComponent(link.href, link.text)}
                  >
                    <BurgerLink>{link.description}</BurgerLink>
                  </Box>
                )
              })}
            </Flex>
          </Box>
          <iframe src={component} width="500px" height={windowHeight} />
          <iframe src={text} width="250px" height={windowHeight} />
          {/* <Flex
            sx={{
              maxWidth: 250,
              minWidth: 250,
              overflowWrap: "break-word",
              flexDirection: "column",
              paddingLeft: 10
            }}
          >
            
          </Flex> */}
        </Flex>
      </Layout>
    </Styled.root>
  )
}
