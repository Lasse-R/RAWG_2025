import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useData from "../hooks/useData";
import {Genre} from "../hooks/useGenres"

const GenreList = () => {
    const {data: genres, error, loading} = useData<Genre>("/genres");

    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                        src={genre.image_background}
                        boxSize="32px"
                        borderRadius="8px"
                        />
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;