import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface props {
  onSelectGenre : (genre: Genre)=>void;
  selectedGenre: Genre | null
}


const GenreList = ({onSelectGenre, selectedGenre}: props) => {
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
            <Button fontWeight={ dataItem.id=== selectedGenre?.id ? 'bold': 'normal'} onClick={()=> onSelectGenre(dataItem)} fontSize="lg" variant="link">{dataItem.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
