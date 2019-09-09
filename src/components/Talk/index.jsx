/** @jsx jsx */
import { Flex, jsx, Styled, Box } from "theme-ui";

import { Avatar } from "../Avatar";
import { LinkIcon } from "../LinkIcon";

import Slides from "./slideshow.svg";
import Video from "./youtube.svg";



export const Talk = ({
  title,
  speaker,
  description,
  videoUrl,
  slidesUrl
}) => {
  return (
    <TalkBox>
      <Avatar size="large" image={speaker.avatarUrl} />
      <TextBox>
        <Speaker>{speaker.name}</Speaker>
        <Title>{title}</Title>
        <Styled.p sx={{ fontSize: 16, paddingTop: 4, margin: 0 }}>
          {description}
        </Styled.p>
        <Flex>
          {videoUrl && <LinkIcon iconUrl={Video} linkUrl={videoUrl} />}
          {slidesUrl && <LinkIcon iconUrl={Slides} linkUrl={slidesUrl} />}
        </Flex>
      </TextBox>
      <BorderLine />
    </TalkBox>
  );
};



const TalkBox = ({ children }) => (
  <Flex
    sx={{
      flexDirection: ["column", "row", "row"],
      padding: 16
    }}
  >
    {children}
  </Flex>
);

const BorderLine = () => (
  <Box
    sx={{
      width: 100,
      borderTop: [
        theme => `2px solid ${theme.colors.mutedText}`,
        "none",
        "none"
      ],
      marginTop: 24
    }}
  />
);

const Speaker = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      color: "mutedText",
      fontSize: 24,
      lineHeight: "tight"
    }}
  >
    {children}
  </Styled.p>
);

const Title = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      color: "mutedText",
      fontFamily: "modern",
      fontSize: 16,
      fontWeight: "light"
    }}
  >
    {children}
  </Styled.p>
);

const TextBox = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: [0, 24, 24],
      marginLeft: [0, 24, 24],
      paddingTop: [8, 0, 0],
      borderLeft: [
        "none",
        theme => `2px solid ${theme.colors.mutedText}`,
        theme => `2px solid ${theme.colors.mutedText}`
      ]
    }}
  >
    {children}
  </Flex>
);
