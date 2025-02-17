import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return <HStack>
        <Switch isChecked={colorMode === "dark"}
            colorScheme="teal"
            onChange={toggleColorMode}
        />
        <Text fontSize="12">Dark Mode</Text>
    </HStack>
};

export default ColorModeSwitch;