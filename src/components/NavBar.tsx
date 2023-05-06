import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/meta.png"


const NavBar = () => {
  return (
    <>
      <div>NavBar</div>

      {/* This helps in laying out components horizontally */}
      <HStack>
        <Image src={logo} boxSize="70px"></Image>
        <Text>Navbar</Text>
      </HStack>
    </>
  );
};

export default NavBar;
