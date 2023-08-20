import {
    Box,
    Flex,
    Heading,
    ButtonGroup,
    Spacer,
    Button
  } from '@chakra-ui/react'

export const Header = () => {
    return(
    <Flex minWidth='max-content' alignItems='center' gap='2' backgroundColor='#410840'>

        <Box p='2'>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@1000&display=swap');
        </style> 
            <Heading fontFamily='Nunito,sans-serif' fontWeight='extrabold' size='lg' color='#ffffff'>Dio Bank</Heading>

        </Box>

        <Spacer />

        <ButtonGroup gap='5' padding='10px'>

            <Button borderRadius='15px' backgroundColor='#7b687b'>Sign Up</Button>

            <Button borderRadius='15px' backgroundColor='#7b687b'>Log in</Button>

        </ButtonGroup>

    </Flex>

)}