import { Card, CardHeader, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link as ReachLink } from "react-router-dom";

const Dashboard = () => {
  const { auth } = useAuth();

  const modules = [
    { name: "Stock Management System", link: "/stock-management-system", roles: ["admin", "super_user", "standart_user"] },
    { name: "Cost Tracking System", link: "/cost-tracking-system", roles: ["admin", "super_user", "standart_user"] },
    { name: "Personel Tracking System", link: "/personnel-tracking-system", roles: ["admin", "super_user"] }
  ];

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
      {
        React.Children.toArray(modules.map((module) => (
          module.roles.some((role) => auth?.role === role) ?
            (
              <Link as={ReachLink} to={module.link} style={{ textDecoration: "none" }}>
                <Card>
                  <CardHeader>
                    <Heading size='md'> {module.name}</Heading>
                  </CardHeader>
                </Card>
              </Link>
            ) : (
              <></>
            )
        )))
      }
    </SimpleGrid>
  )
}
export default Dashboard;