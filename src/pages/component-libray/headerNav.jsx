/** @jsx jsx */
import { jsx, Layout, Styled } from "theme-ui"
import { Global, css } from "@emotion/core";
import { HeaderNav } from "../../components"

export default () => {
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
      </Layout>
    </Styled.root>
  )
}
