import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {

    const {games, error} = useGames();
    
    return (
        <div>
            {error && <Text color="tomato">{error}</Text>}
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={4}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;