import { Grid, GridItem, Show, HStack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem pl='2' bg='dark.300' area={'header'}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem pl='2' bg='dark.300' area={'aside'}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem pl='2' bg='dark.300' area={'main'} padding={5}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
