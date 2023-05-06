import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" >
        <NavBar></NavBar>
      </GridItem>

      {/* this is rendered only large devices and above*/}
      <Show above="lg">
        <GridItem area="aside" >
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        MAIN
      </GridItem>
    </Grid>
  );
}

export default App;
