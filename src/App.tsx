import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGanre] = useState<Genre | null>(null);
  // const [selectedPlatform, SetSelectedPlatform ] = useState<Platform | null>(null);

  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      {/* this is rendered only large devices and above*/}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery , genre})}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector selectedPlatform={GameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({ ...GameQuery , platform})}/>
        <GameGrid gameQuery={GameQuery} ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
