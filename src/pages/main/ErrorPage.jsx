import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <Center w="100vw" h="100vh">
            <VStack w="40rem" spacing={10} rounded="lg" p={5} m={2} bgGradient="linear(to-l, #e0c3c3, #e58e8e)" color="red.600">
                <Heading>Oops!</Heading>
                <Text>Sorry, an unexpected error has occurred.</Text>
                <Text>
                    <i>{error.statusText || error.message}</i>
                </Text>
            </VStack>
        </Center>
    )
}

export default ErrorPage
