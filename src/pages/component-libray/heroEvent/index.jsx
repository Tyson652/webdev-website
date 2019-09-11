/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeroEvent } from "../../../components"
import logo from "../../../images/elixir-logo.svg"
import background from "../../../images/background.jpeg"

export default () => {
  return (
    <HeroEvent
      background={background}
      logoUrl={logo}
      heading="Elixir Sydney"
      date="2015-10-10"
      time="6:00 - 8:30pm"
      location1="Expert360"
      location2="Level 3, 14 Martin Place, NSW, 2000"
    />
  )
}
