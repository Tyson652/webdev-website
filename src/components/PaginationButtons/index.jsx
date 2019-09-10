/** @jsx jsx */
import { Flex, jsx, Styled, Box } from "theme-ui"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PaginationButtonsYaml from "./paginationButtonsYaml.yaml"

export const PaginationButtons = ({ pageContext }) => {
  let previous = "test";
  let next = null;
  if (pageContext) {
    previous = pageContext.previous
    next = pageContext.next
  }
  const displayPrevious = previous === null ? "none" : "inline-block"
  const previousPath = previous === null ? "none" : "test"
  // const previousPath = previous === null ? "none" : previous.frontmatter.path
  const displayNext = next === null ? "none" : "inline-block"
  const nextPath = next === null ? "none" : next.frontmatter.path

  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      <Link
        sx={{
          justifyContent: "flex-start",
          display: "inline-block",
          variant: "linkStyles.buttonDefault",
          color: "text",
        }}
        to={previousPath}
      >
        <Box sx={{ display: displayPrevious }}>
          <Styled.p
            sx={{
              fontSize: 24,
              alignItems: "center",
              display: "flex",
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "chevron-left"]}
              css={{ color: "#ff9900", fontSize: 40 }}
            />
            {PaginationButtonsYaml.previous}
          </Styled.p>
        </Box>
      </Link>
      <Link
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          display: displayNext,
          variant: "linkStyles.buttonDefault",
          color: "text",
        }}
        to={nextPath}
      >
        <Styled.p
          sx={{
            fontSize: 24,
            alignItems: "center",
            display: "flex",
          }}
        >
          {PaginationButtonsYaml.next}
          <FontAwesomeIcon
            icon={["fas", "chevron-right"]}
            css={{ color: "#ff9900", fontSize: 40 }}
          />
        </Styled.p>
      </Link>
    </Flex>
  )
}
