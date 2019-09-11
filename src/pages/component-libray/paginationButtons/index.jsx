/** @jsx jsx */
import { jsx } from "theme-ui"
import { PaginationButtons } from "../../../components"
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight, faChevronLeft);


export default () => {
  return (
   <PaginationButtons />
  )
}