import React from 'react';
import { ChakraProvider, Flex, Spacer, Center, Input, Button, Box, Heading, Text, Checkbox } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' bgGradient="linear(to-tl, red.100, teal.100)">
        <Center padding="100px">
          <Box width="580px" height="750px" borderRadius="16"
            padding="36px 26px" backgroundColor="white">
            <Heading marginBottom="10px" color="purple.800" >Willkommen zurück!</Heading>
            <Text  color="purple.800" margin="10px" >Jetzt einloggen und den richtigen Job mit dem richtigen Gehalt finden.</Text>
            <Heading as="h2" size="sm" color="purple.800" margin="20px 0px 10px 10px">E-Mail-Adresse</Heading>
            <Input placeholder="E-Mail-Adresse" borderRadius="25px" height='45px' />
            <Heading as="h2" size="sm"  color="purple.800"  margin="20px 0px 10px 10px">Passwort</Heading>
            <Input placeholder="Passwort" borderRadius="25px" height='45px' />
            <Flex margin="10px">
              <Box>
              <Checkbox defaultChecked colorScheme="teal">Eingeloggt bleiben </Checkbox>
              </Box>
              <Spacer />
              <Box>
              <Button colorScheme="teal" variant="link">Passwort vergessen?</Button>
              </Box>
            </Flex>
            <Button colorScheme="teal" color="white" borderRadius="25px" height='45px' width="100%" marginTop="10px"> Einloggen </Button>
            <Center margin="10px"><Text  color="purple.800">oder</Text></Center>
            <Box as='button'
              height='45px'
              width='100%'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                px='8px'
                borderRadius='25px'
                fontSize='14px'
                fontWeight='bold'
                bg='rgb(225, 246, 247)'
                color='rgb(12, 37, 119)'
                _hover={{ bg: 'rgb(185, 231, 233)' }}
                _active={{
                  bg: 'rgb(185, 231, 233)',
                  transform: 'scale(0.98)',
                }}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
              }}>
              <Center>
                <Flex>
                  <Box width="30px"><svg aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="GoogleLoginColouredIcon-25">
                  <title id="GoogleLoginColouredIcon-25">Google login coloured icon</title>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.68 8.18177C15.68 7.6145 15.6291 7.06905 15.5345 6.54541H8V9.63995H12.3054C12.12 10.64 11.5564 11.4872 10.7091 12.0545V14.0618H13.2945C14.8073 12.669 15.68 10.6181 15.68 8.18177Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99991 16C10.1599 16 11.9708 15.2836 13.2945 14.0618L10.709 12.0546C9.99264 12.5346 9.07627 12.8182 7.99991 12.8182C5.91628 12.8182 4.15264 11.4109 3.52355 9.52002H0.85083V11.5927C2.16719 14.2073 4.87264 16 7.99991 16Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.52363 9.51995C3.36363 9.03995 3.27272 8.52722 3.27272 7.99995C3.27272 7.47268 3.36363 6.95995 3.52363 6.47995V4.40723H0.850908C0.30909 5.48723 0 6.70904 0 7.99995C0 9.29086 0.30909 10.5127 0.850908 11.5927L3.52363 9.51995Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99991 3.18181C9.17446 3.18181 10.229 3.58545 11.0581 4.37818L13.3526 2.08363C11.9672 0.792726 10.1563 0 7.99991 0C4.87264 0 2.16719 1.79273 0.85083 4.40727L3.52355 6.47999C4.15264 4.58908 5.91628 3.18181 7.99991 3.18181Z" fill="#EA4335">
                    </path></svg>
                  </Box>
                  <Box>
                    <Text marginTop="8px" marginLeft="15px"> Mit Google einloggen </Text> 
                  </Box>
                  </Flex>
                </Center>
            </Box>
              <Flex marginTop="20px">
                <Text fontSize="13px">Indem du den Button oben klickst, stimmst du unseren</Text>
                <Button colorScheme="teal" variant="link" fontSize="13px" height="19px" width="145px"> Nutzungsbedingungen </Button>
                <Text fontSize="13px">  zu.</Text>
              </Flex>
              <Flex marginTop="10px">
                <Text fontSize="13px">Lies auch unsere </Text>
                <Button colorScheme="teal" variant="link" fontSize="13px" height="19px" width="140px">  Datenschutzerklärung </Button>
                <Text fontSize="13px">.</Text>
              </Flex>
            <Center>
              <Flex marginTop="20px">
                <Text fontSize="17px">Du hast noch keinen Account bei uns? </Text>
                <Button colorScheme="teal" variant="link" fontSize="17px" height="25px" width="140px">  Jetzt registrieren. </Button>
              </Flex>              
            </Center>
            <Center>
              <Flex marginTop="20px">
                <Text fontSize="17px">Sind Sie Arbeitgeber? Bitte </Text>
                <Button colorScheme="teal" variant="link" fontSize="17px" height="25px" width="100px">  hier entlang. </Button>
              </Flex>              
            </Center>
          </Box> 
        </Center>
      </Box>
   </ChakraProvider>
    
  );
}

export default App;
