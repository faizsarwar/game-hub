import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputs from "./searchInputs";


const NavBar = () => {
  return (
    <>
      {/* This helps in laying out components horizontally */}
      <HStack padding="10px">
        <Image src={logo} boxSize="70px"></Image>
        <SearchInputs></SearchInputs>
        <ColorModeSwitch></ColorModeSwitch>
        {/* <Text>Navbar</Text> */}
      </HStack>
    </>
  );
};

export default NavBar;
