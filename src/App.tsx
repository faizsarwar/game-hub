import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGanre] = useState<Genre | null>(null);
  // const [selectedPlatform, SetSelectedPlatform ] = useState<Platform | null>(null);

  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        ></NavBar>
      </GridItem>

      {/* this is rendered only large devices and above*/}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={GameQuery} />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={GameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...GameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={GameQuery.sortOrder}
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder: sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={GameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
