import { Card, CardBody, Heading, Image, HStack, AspectRatio } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface Props {
    game: Game;
}


const GameCard = ({ game }: Props) => {
    return <Card overflow="hidden" boxShadow="md">

        <Image src={getCroppedImage(game.background_image)} />

        <CardBody>
            <HStack justifyContent="space-between">
                <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
                <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2x1">{game.name}</Heading>
        </CardBody>
    </Card>
};


export default GameCard;
