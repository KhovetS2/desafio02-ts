import {
    Box
  } from '@chakra-ui/react'


export const Card = ({children}:any) => {
    return(
        <Box backgroundColor='#e9e5e9' borderRadius='25px' padding='3em' width='70vw' margin='1em auto'>   
          { children }
        </Box>
    )
}