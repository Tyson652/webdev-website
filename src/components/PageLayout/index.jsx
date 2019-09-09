/** @jsx jsx */
import { useState, ReactNode } from "react"
import { jsx, Layout, Container, Box, Styled } from "theme-ui"
import { Global, css } from "@emotion/core"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "../Footer"
import { HeaderNav } from "../HeaderNav"

library.add(faCheckSquare, faCoffee)

export const PageLayout = ({ children, page, logo }) => {
  const [position, setPosition] = useState("null")

  const togglePageFix = () => {
    position === "null" ? setPosition("fixed") : setPosition("null")

    return position
  }
  return (
    <Styled.root>
      <Layout sx={{ position, width: "100vw" }}>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Container
          sx={{
            position: "fixed",
            maxWidth: "100%",
            padding: "0px",
            zIndex: "100",
          }}
        >
          <HeaderNav
            page={page}
            logo={logo}
            togglePageFix={togglePageFix}
          />
        </Container>
        {children}
        <Box sx={{ flexGrow: 1 }} />
        <Footer />
      </Layout>
    </Styled.root>
  )
}
