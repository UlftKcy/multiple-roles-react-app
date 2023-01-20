import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { validate } from "../../validation/registerValidate";
import { Link as ReachLink } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      occupation: "",
      phone: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={{ base: "14", md: "0" }}
    >
      <Box bg="white" p={10} rounded="md" w="100%">
        <Heading textAlign="center" mb={6}>
          Register
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={5}>
            <FormControl>
              <FormLabel htmlFor="first_name">First Name</FormLabel>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First Name"
                {...formik.getFieldProps(
                  "first_name"
                )} /* useFormik() returns a helper method called formik.getFieldProps() to make it faster to wire up inputs */
                style={{
                  borderColor: `${
                    formik.touched.first_name && formik.errors.first_name
                      ? "red"
                      : ""
                  }`,
                }}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div data-testid="first_name_error" style={{ color: "red" }}>{formik.errors.first_name}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last_name">Last Name</FormLabel>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Last Name"
                {...formik.getFieldProps("last_name")}
                style={{
                  borderColor: `${
                    formik.touched.last_name && formik.errors.last_name
                      ? "red"
                      : ""
                  }`,
                }}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div style={{ color: "red" }}>{formik.errors.last_name}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="occupation">Occupation</FormLabel>
              <Input
                id="occupation"
                name="occupation"
                type="text"
                placeholder="Occupation"
                {...formik.getFieldProps("occupation")}
                style={{
                  borderColor: `${
                    formik.touched.occupation && formik.errors.occupation
                      ? "red"
                      : ""
                  }`,
                }}
              />
              {formik.touched.occupation && formik.errors.occupation ? (
                <div style={{ color: "red" }}>{formik.errors.occupation}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                {...formik.getFieldProps("phone")}
                style={{
                  borderColor: `${
                    formik.touched.phone && formik.errors.phone ? "red" : ""
                  }`,
                }}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: "red" }}>{formik.errors.phone}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
                style={{
                  borderColor: `${
                    formik.touched.email && formik.errors.email ? "red" : ""
                  }`,
                }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                style={{
                  borderColor: `${
                    formik.touched.password && formik.errors.password
                      ? "red"
                      : ""
                  }`,
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </FormControl>
            <Button
              data-testid="btn_register_submit"
              type="submit"
              colorScheme="purple"
              width="full"
            >
              Register
            </Button>
          </VStack>
        </form>
        <Box display="flex" justifyContent="center" alignItems="center" my={4}>
          <Text mr={3}>Do you have an account?</Text>
          <Link fontSize="lg" fontWeight="extrabold" as={ReachLink} to="/login">
            Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
