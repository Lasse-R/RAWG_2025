import logo from '../assets/image.png';
import { HStack, Image, Text, Heading } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <Heading fontSize="2x1">RAWG 2025</Heading>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar