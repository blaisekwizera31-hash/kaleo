import { Button, Heading, HStack } from "@chakra-ui/react";
import { Star } from "lucide-react";
import "./Navbar.css"

const Navbar = () => {
  const navigation = ["Ranch life", "About us", "Events", "Directions", "Houses"];

  return (
    <HStack className="nav-container" gap={6} ps={8} align="center">
      <Heading as="h6">KL</Heading>
      <Heading as="h6">|</Heading>
      {navigation.map((item, index) => (
        <a key={index} className="nav-link">{item}</a>
      ))}
      <Button
        bg="black"
        color="white"
        border="2px solid white"
        ms="auto"      // pushes button to the right
        me="4"         // optional right margin
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Book a visit
        <Star size={12} fill="white" />
      </Button>
    </HStack>
  );
};

export default Navbar;