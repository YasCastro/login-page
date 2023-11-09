import React from 'react';
import { ChakraProvider, Input, Button, Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh'>
        <h1>Faça o login</h1>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <Button> Entrar </Button> 
      </Box>
   </ChakraProvider>
    
  );
}

export default App;
