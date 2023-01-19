<form onSubmit={formik.handleSubmit}>
<VStack spacing={5}>
  <FormControl>
    <FormLabel htmlFor='first_name'>First Name</FormLabel>
    <Input
      id="first_name"
      name="first_name"
      type="text"
      {...formik.getFieldProps("first_name")} /* useFormik() returns a helper method called formik.getFieldProps() to make it faster to wire up inputs */
    /*  onChange={formik.handleChange}
     value={formik.values.first_name} */
     />
     </FormControl>
     <FormControl>
       <FormLabel htmlFor='last_name'>Last Name</FormLabel>
       <Input
         id="last_name"
         name="last_name"
         type="text"
         {...formik.getFieldProps("last_name")}
       /*  onChange={formik.handleChange}
        value={formik.values.last_name} */
       />
     </FormControl>
     <FormControl>
       <FormLabel htmlFor='occupation'>Occupation</FormLabel>
       <Input
         id="occupation"
         name="occupation"
         type="text"
         {...formik.getFieldProps("occupation")}
       /* onChange={formik.handleChange}
       value={formik.values.occupation} */
       />
     </FormControl>
     <FormControl>
       <FormLabel htmlFor='phone'>Phone</FormLabel>
       <Input
         id="phone"
         name="phone"
         type="number"
         {...formik.getFieldProps("phone")}
       /*  onChange={formik.handleChange}
        value={formik.values.phone} */
       />
     </FormControl>
     <FormControl>
       <FormLabel htmlFor='email'>Email</FormLabel>
       <Input
         id="email"
         name="email"
         type="email"
         {...formik.getFieldProps("email")}
       /* onChange={formik.handleChange}
       value={formik.values.email} */
       />
     </FormControl>
     <FormControl>
       <FormLabel htmlFor='password'>Password</FormLabel>
       <Input
         id="password"
         name="password"
         type="password"
         {...formik.getFieldProps("password")}
       /*  onChange={formik.handleChange}
        value={formik.values.password} */
       />
     </FormControl>
     <Button type="submit" colorScheme="purple" width="full">
       Register
     </Button>
   </VStack>
 </form>