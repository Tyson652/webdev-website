/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx, Box, Flex, Styled } from "theme-ui"
import { Logo } from "../Logo"
import HeaderNavYaml from "./headerNavYaml.yaml"

export const HeaderNav = ({ togglePageFix, logo, page }) => {
  const { title, links } = HeaderNavYaml

  const [headerBg, setHeaderBg] = useState("headerTransparent")

  useEffect(() => {
    window.addEventListener("scroll", function() {
      let currentOffset = window.pageYOffset
      let windowWidth = window.innerWidth
      let breakPoint = windowWidth > 800 ? 200 : 100
      setHeaderBg(
        currentOffset > breakPoint ? "headerOpaque" : "headerTransparent"
      )
    })
  })

  return (
    <Box
      sx={{
        backgroundColor: page === "home" ? headerBg : "headerOpaque",
        transition: ".6s",
        paddingX: [16, 16, 24],
        paddingY: 8,
      }}
    >
      <BurgerNav
        togglePageFix={togglePageFix}
        title={title}
        links={links.map(link => ({
          description: link.description,
          href: link.href,
        }))}
        logo={logo}
        page={page}
      />
      <Navbar
        page={page}
        title={title}
        logo={logo}
        links={links.map(link => ({
          description: link.description,
          href: link.href,
        }))}
      />
    </Box>
  )
}

const Navbar = ({ links, title, logo, page }) => {
  return (
    <Box sx={{ display: ["none", "block", "block"] }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 8,
        }}
      >
        <Styled.a href="/">
          <HeaderLogo page={page} logo={logo}>
            {title}
          </HeaderLogo>
        </Styled.a>
        <Flex
          sx={{ alignItems: "center", cursor: "pointer" }}
          css={{
            a: {
              opacity: 0.8,
              transition: ".4s",
            },
            "&:hover > a": {
              opacity: 1,
            },
            "&:hover > a:not(:hover)": {
              opacity: ".5",
            },
          }}
        >
          {links.map((link, i) => (
            <Styled.a
              key={i}
              href={link.href}
              sx={{
                textDecoration: "none",
              }}
            >
              <HeaderLink>{link.description.toUpperCase()}</HeaderLink>
            </Styled.a>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

const HeaderLogo = ({ children, logo, page }) => {
  const [smallHeadingOpacity, setHeadingOpacity] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", function() {
      let currentOffset = window.pageYOffset
      let windowWidth = window.innerWidth
      let breakPoint = windowWidth > 800 ? 500 : 100
      setHeadingOpacity(currentOffset > breakPoint ? 1 : 0)
    })
  })

  return (
    <Flex sx={{ alignItems: "center" }}>
      <Logo size="small" logoUrl={logo} />
      <Styled.h3
        sx={{
          margin: 0,
          variant: "linkStyles.buttonDefault",
          color: "background",
          padding: 4,
          paddingX: 8,
          fontFamily: "modern",
          fontWeight: "light",
          lineHeight: "heading",
          opacity: page === "home" ? smallHeadingOpacity : 1,
          display: "inline-block",
          verticalAlign: "super",
          marginLeft: "20px",
          transition: ".6s opacity",
        }}
      >
        {children}
      </Styled.h3>
    </Flex>
  )
}

const HeaderLink = ({ children }) => (
  <Styled.p
    sx={{
      display: "inline",
      color: "background",
      fontSize: [16, 16, 20],
      padding: 2,
      marginX: [16, 16, 24],
      letterSpacing: [0, 0, "1px"],
      fontWeight: "light",
      font: "modern",
    }}
  >
    {children}
  </Styled.p>
)

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

const IconBar = () => (
  <Box
    sx={{
      width: "27px",
      height: "4px",
      marginY: "6px",
      backgroundColor: "background",
      opacity: 0.8,
      borderRadius: 15,
    }}
  />
)

const BurgerIcon = ({ dropDownOnClick }) => (
  <Box onClick={dropDownOnClick} sx={{ cursor: "pointer", marginRight: 24 }}>
    <IconBar />
    <IconBar />
    <IconBar />
  </Box>
)

const BurgerNav = ({ links, title, togglePageFix, logo, page }) => {
  const [value, setValue] = useState("none")

  const dropDownOnClick = () => {
    if (value === "none") {
      setValue("null")
      togglePageFix()
    } else {
      setValue("none")
      togglePageFix()
    }
    return value
  }

  return (
    <Box sx={{ width: "100%", display: ["block", "none", "none"], left: 0 }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 8,
        }}
      >
        <Styled.a href="/">
          <HeaderLogo page={page} logo={logo}>
            {title}
          </HeaderLogo>
        </Styled.a>
        <BurgerIcon dropDownOnClick={dropDownOnClick} />
      </Flex>
      <Flex
        sx={{
          position: "fixed",
          width: "100%",
          display: value,
          backgroundColor: "background",
          justifyContent: "center",
          variant: "textStyles.modern",
          fontSize: 20,
          zIndex: 25,
          left: 0,
        }}
      >
        <Flex
          sx={{
            width: "100%",
            flexDirection: "column",
            textAlign: "center",
            zIndex: 5,
          }}
        >
          {links.map((link, i) => (
            <Styled.a key={i} href={link.href} sx={{ textDecoration: "none" }}>
              <BurgerLink>{link.description}</BurgerLink>
            </Styled.a>
          ))}
        </Flex>
      </Flex>
      <Box sx={{ position: "absolute", top: 0, left: 0 }}>
        <Flex
          onClick={dropDownOnClick}
          sx={{
            display: value,
            position: "fixed",
            zIndex: 20,
            width: "100%",
            height: "100%",
            backgroundColor: "darkness",
            opacity: "0.2",
          }}
        />
      </Box>
    </Box>
  )
}
