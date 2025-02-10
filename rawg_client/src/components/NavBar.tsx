import logo from '../assets/image.png';
import { HStack, Image, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar