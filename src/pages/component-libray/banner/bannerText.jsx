/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => {
  return (
    <div>
      <p>{'import Tyson from "../../images/tyson.jpeg"'}</p>
      <p>{'<Avatar size="large" image={Tyson}/>'}</p>
      <p>{"Size options: large, small"}</p>
    </div>
  )
}
