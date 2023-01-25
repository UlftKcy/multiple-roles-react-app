import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link as ReachLink } from "react-router-dom";

const Dashboard = () => {
  const { auth } = useAuth();

  const modules = [
    { name: "Stock Management System", link: "/stock-management-system", roles: ["admin", "super_user", "standart_user"] },
    { name: "Cost Tracking System", link: "/stock-management-system", roles: ["admin", "super_user", "standart_user"] },
    { name: "Personel Tracking System", link: "/stock-management-system", roles: ["admin", "super_user"] }
  ];

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {
        React.Children.toArray(modules.map((module) => (
          module.roles.some((role) => auth?.role === role) ?
            (
              <Card>
                <CardHeader>
                  <Heading size='md'> {module.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                  <Button><Link as={ReachLink} to={module.route} style={{ textDecoration: "none" }}>View Here</Link></Button>
                </CardFooter>
              </Card>
            ) : (
              <></>
            )
        )))
      }
    </SimpleGrid>
  )
}
export default Dashboard;