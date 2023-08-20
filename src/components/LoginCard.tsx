import {
    Center,
    Heading,
    Input
} from '@chakra-ui/react'
import { login } from "./../services/login";
import { Button } from "./Button";
import { Card } from "./Card";

export const LoginCard = () => {
    return(
        <Card>
            <Center marginBottom='1em'>
                    <Heading fontFamily='sans-serif' color='#410840'>Faça o login</Heading>
                </Center>
                <Center marginBottom='1em'>
                    <Input placeholder="email" width='50vw'variant='flushed' borderColor='#410840' color='#410840' fontWeight='bold' /> 
                </Center>
                <Center marginBottom='1em'>
                    <Input width='50vw' placeholder="password" type='password' variant='flushed' borderColor='#410840' color='#410840'fontWeight='bold' />
                </Center>
                <Center>
                    <Button texto='Entrar' event={login}  />
                </Center>
        </Card>
    )
}
