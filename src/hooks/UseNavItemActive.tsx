import { useState } from "react"

export default function UseNavItemActive(string = "") {
  const [navItem, setNavItem] = useState("")
  setNavItem(string)
  return navItem
}
