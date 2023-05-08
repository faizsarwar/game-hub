import BullsEye from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import Meh from "../assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react";

interface props {
  rating: number;
}

const Emoji = ({ rating }: props) => {
    const emojiMap: {[key: number]: ImageProps} = {
        3: {src: Meh, alt : "meh", boxSize: "25px"},
        4: {src: thumbsUp, alt : "recommended", boxSize: "25px"},
        5: {src: BullsEye, alt : "Exceptional", boxSize: "35px"},
    }
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1}></Image>
};

export default Emoji;
