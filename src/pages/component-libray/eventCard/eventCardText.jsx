/** @jsx jsx */
import { jsx, Box } from "theme-ui"

export default () => {
  return (
    <Box sx={{ color: 'white', backgroundColor: 'black'}} >
      <p>{'import Tyson from "../../images/tyson.jpeg"'}</p>
      <p>{'<Avatar size="large" image={Tyson}/>'}</p>
      <p>{"Size options: large, small"}</p>
    </Box>
  )
}