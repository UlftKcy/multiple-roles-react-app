import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'

const SuperUserPage = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'> SuperUser dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  )
}

export default SuperUserPage;
