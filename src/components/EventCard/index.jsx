/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventCardYaml from "./EventCardYaml.yaml"

export const EventCard = ({
  title,
  slug,
  date,
  body,
  image,
  description
}) => {
  if (image === undefined) {
    image = EventCardYaml.defaultImage;
  }
  return (
    <Styled.a
      sx={{
        textDecoration: "none"
      }}
      href={slug}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: ["260px", "400px", "400px"],
          variant: "boxShadowStyles.darkShadow",
          "&:hover": {
            transform: "translateY(-3px)",
            transition: "0.3s",
            variant: "boxShadowStyles.hoverShadow"
          },
          "&:not(:hover)": { transform: "translateY(3px)", transition: "0.3s" }
        }}
      >
        <Styled.img
          src={image}
          sx={{
            width: "100%",
            height: 256,
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Box sx={{ padding: 16 }}>
          <Styled.p sx={{ marginY: 2, color: "text" }}>{title}</Styled.p>
          <Styled.p
            sx={{ marginTop: 0, marginBottom: 4, fontSize: 4, color: "text" }}
          >
            {description}
          </Styled.p>
          <Styled.p
            sx={{
              marginTop: 16,
              marginBottom: 4,
              fontSize: 16,
              fontWeight: "bold",
              color: "#00ace6"
            }}
          >
            Show More{" "}
            <FontAwesomeIcon
              icon={["fas", "chevron-right"]}
              css={{ color: "#ff9900" }}
            />
          </Styled.p>
        </Box>
      </Flex>
    </Styled.a>
  );
};

