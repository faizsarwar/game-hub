import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner/>

  if (error) return null;

  return (
    <List>
      {data.map((dataItem) => (
        <ListItem key={dataItem.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(dataItem.image_background)}
            />
            <Text fontSize="lg">{dataItem.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
