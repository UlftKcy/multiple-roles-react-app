import { SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import Module from '../../components/dashboard/Module';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  let { current_user } = useAuth();
  console.log(current_user)
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Module w='100%' bg='blue.500' />
      <Module w='100%' bg='blue.500' />
      <Module w='100%' bg='blue.500' />
    </SimpleGrid>
  )
}
export default Dashboard;