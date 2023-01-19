import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik'
import React from 'react';
import { validate } from '../../validation/loginValidate';
import { Link as ReachLink } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <Container minH="100vh" display="flex" justifyContent="center" alignItems="center" my={{ base: '14', md: '0' }}>
    <Box bg="white" p={10} rounded="md" w="100%">
      <Heading textAlign="center" mb={6}>Login</Heading>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              {...formik.getFieldProps("email")}
              style={{ borderColor: `${formik.touched.email && formik.errors.email ? "red" : ""}` }}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
              style={{ borderColor: `${formik.touched.password && formik.errors.password ? "red" : ""}` }}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full">
            Login
          </Button>
        </VStack>
      </form>
      <Box display="flex" justifyContent="center" alignItems="center" my={4}>
          <Text mr={3}>Don't you have an account?</Text>
          <Link fontSize="lg" fontWeight="extrabold" as={ReachLink} to="/register">Register</Link>
        </Box>
    </Box>
  </Container>
  )
}

export default Login