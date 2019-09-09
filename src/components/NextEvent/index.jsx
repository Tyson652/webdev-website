/** @jsx jsx */
import { jsx, Container, Flex, Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import NextEventYaml from "./nextEventYaml.yaml"

export const NextEvent = ({
  eventImgUrl,
  title,
  body
}) => {
  return (
    <Container>
      <Flex
        sx={{
          flexDirection: ["column", "column", "row"],
          margin: 24
        }}
      >
        <Styled.div
          sx={{
            backgroundImage: `url(${eventImgUrl})`,
            width: ["auto", "auto", "1000px"],
            height: ["500px", "400px", "auto"],
            backgroundSize: "cover",
            borderRadius: "14px",
            marginBottom: "20px"
          }}
        />
        <Flex
          sx={{
            flexDirection: "column",
            width: "100%",
            marginLeft: [0, 0, 40]
          }}
        >
          <Styled.h4
            sx={{
              margin: 2,
              fontWeight: "normal"
            }}
          >
            {NextEventYaml.nextEventLine}
          </Styled.h4>
          <Styled.h3
            sx={{
              margin: 2,
              font: "body"
            }}
          >
            {title}
          </Styled.h3>
          <Flex
            sx={{
              flexDirection: "column"
            }}
          >
            <MDXRenderer components={null} scope={null}>
              {body}
            </MDXRenderer>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
