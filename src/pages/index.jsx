/** @jsx jsx */
import { useState } from "react"
import { jsx, Layout, Styled, Box, Flex } from "theme-ui"
import { Global, css } from "@emotion/core"
import { HeaderNav } from "../components"

export default () => {
  let links = [
    { description: "Avatar", href: "/component-libray/avatar/" },
    { description: "Footer", href: "/component-libray/footer/" },
    { description: "EventCard", href: "/component-libray/eventCard/" },
  ]

  let componentHref = "/component-libray/avatar/"
  const [component, setComponent] = useState("/component-libray/avatar/")

  const toggleComponent = href => {
    console.log(href)
    // setComponent(href)
    return component
  }
  // console.log(componentHref)

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
          <Box sx={{ width: 400, height: 600 }}>
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
                    onClick={toggleComponent.bind(link.href)}
                  >
                    <BurgerLink>{link.description}</BurgerLink>
                  </Box>
                )
              })}
            </Flex>
          </Box>
          <iframe src={component} width="500px" height="600px" />
        </Flex>
      </Layout>
    </Styled.root>
  )
}
