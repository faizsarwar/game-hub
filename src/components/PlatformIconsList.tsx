import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: props) => {
  const iconMap : {[key: string] : IconType}= {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid
  };
  return (
    <HStack marginY={1}>
      {/* <div>PlatformIconsList</div> */}
      {platforms.map((platform) => (
        // <Text>{platform.name}</Text>
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
