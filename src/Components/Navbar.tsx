import { Button, Heading, HStack } from "@chakra-ui/react";
import { Star } from "lucide-react";
const Navbar = () => {
  const navigation = [
    "Ranch life",
    "About us",
    "Events",
    "Directions",
    "Houses",
  ];

  return (
    <HStack className="nav-container" gap={21} ps={50}>
      <Heading as="h5" pe="2">
        KL
      </Heading>
      <Heading as="h5" pe="2">
        |
      </Heading>
      {navigation.map((item, index) => {
        return (
          <a key={index} className="nav-link">
            {item}
          </a>
        );
      })}
      <Button
        bg="black"
        color="white"
        border="2px solid red"
        ms="auto"
        me="10"
        mt="10"
      >
        Book a visit
        <Star size={12} fill="white"></Star>
      </Button>
    </HStack>
  );
};

export default Navbar;
