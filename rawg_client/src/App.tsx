import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header main"`,
        lg: `"header header" "aside main"`,
      }}
    >
      <GridItem pl='2' bg='dark.300' area={'header'}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem pl='2' bg='dark.300' area={'aside'}>
          Sidebar
        </GridItem>
      </Show>
      <GridItem pl='2' bg='dark.300' area={'main'} padding={5}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
