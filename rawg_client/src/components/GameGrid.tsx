import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const skeletons = [...Array(20).keys()];

    const { games, error, loading } = useGames();

    return (
        <div>
            {error && <Text color="tomato">{error}</Text>}
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                spacing={4}
                padding="10">
                {loading
                    ? skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>))


                    : games.map((game) => (
                        <GameCardContainer key={game.id}>
                            <GameCard key={game.id} game={game} />
                        </GameCardContainer>))}

            </SimpleGrid>
        </div>
    );
};

export default GameGrid;