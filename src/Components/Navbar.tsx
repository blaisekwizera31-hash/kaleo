import { HStack } from "@chakra-ui/react"

const Navbar = () => {
  const navigation = ["Ranch life", "About us", "Events", "Directions", "Houses"]

  return (
    <HStack>
      {navigation.map((item, index) => {
        return <a key={index}>{item}</a>
      })}
    </HStack>
  )
}

export default Navbar