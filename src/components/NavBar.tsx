import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
  return (
    <>
      {/* This helps in laying out components horizontally */}
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="70px"></Image>
        <ColorModeSwitch></ColorModeSwitch>
        {/* <Text>Navbar</Text> */}
      </HStack>
    </>
  );
};

export default NavBar;
