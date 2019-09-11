/** @jsx jsx */
import { jsx } from "theme-ui"
import { IconButton } from "../../../components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMeetup } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faMeetup)

export default () => {
  const buttonIconName="Sign up on Meetup"
  const buttonIconPrefix="fab"
  const buttonText="Sign up on Meetup"
  const buttonHref="//www.meetup.com/en-AU/elixir-sydney/events/kznqrpyzfbjb/"

  return (
    <IconButton
      iconName={buttonIconName}
      iconPrefix={buttonIconPrefix}
      text={buttonText}
      eventLink={buttonHref}
    />
  )
}
