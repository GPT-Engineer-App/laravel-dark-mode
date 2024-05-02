import React from "react";
import { ChakraProvider, extendTheme, CSSReset, Box, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />;
};

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher />
        <Button mt={4}>Hello World</Button>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
