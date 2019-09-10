/** @jsx jsx */
import { useState } from "react"
import { jsx, Box, Flex } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SlideShowYaml from "./slideShowYaml.yaml"

export const SlideShow = ({ imageUrls }) => {
  console.log(imageUrls)
  const [index, setIndex] = useState(0)
  let images = undefined
  if (imageUrls === null || imageUrls === undefined) {
    images = [SlideShowYaml.defaultImage]
  } else {
    images = imageUrls.map(
      image => SlideShowYaml.siteUrl + image.childImageSharp.fluid.src
    )
  }

  const handleNext = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () => {
    index === 0 ? setIndex(images.length) : setIndex(index - 1)
  }
  const showPrevious = index === 0 ? "hidden" : "inline-block"
  const showNext = index === images.length - 1 ? "hidden" : "inline-block"

  return (
    <Flex
      sx={{
        paddingX: [16, 16, 10],
        paddingY: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onClick={handlePrevious}
        sx={{ cursor: "pointer", visibility: showPrevious }}
      >
        <FontAwesomeIcon
          icon={["fas", "chevron-left"]}
          css={{ color: "rgb(33,16,75)", fontSize: 50, paddingRight: 10 }}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[index]})`,
          height: [200, 400, 400],
          width: "80%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        onClick={handleNext}
        sx={{ cursor: "pointer", visibility: showNext }}
      >
        <FontAwesomeIcon
          icon={["fas", "chevron-right"]}
          css={{ color: "rgb(33,16,75)", fontSize: 50, paddingLeft: 10 }}
        />
      </Box>
    </Flex>
  )
}
