import { HStack } from "@chakra-ui/react"
import "./Navbar.css"
const Navbar = () => {
  const navigation = ["Ranch life", "About us", "Events", "Directions", "Houses"]

  return (
    <HStack className="nav-container" gap={24}>
      {navigation.map((item, index) => {
        return <a key={index} className="nav-link">{item}</a>
      })}
    </HStack>
  )
}

export default Navbar