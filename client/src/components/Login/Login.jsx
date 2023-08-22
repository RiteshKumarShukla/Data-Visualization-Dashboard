import React from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const LoginPage = () => {
  const toast = useToast();

  const handleLogin = () => {
    // will implement  actual login logic here
    toast({
      title: 'Redirecting to Dashboard',
      status: 'success',
      duration: 10000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg="linear-gradient(to bottom right, #4F3BA9, #9068BE)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white" 
        textAlign="center"
      >
        <h1 style={{ color: 'white' }}>Welcome Admin !!!</h1>
        <form onSubmit={handleLogin}>
          <FormControl>
            <FormLabel style={{ color: 'white' }}>Admin Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white" 
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: 'white' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin" 
              borderColor="white"
              disabled
            />
          </FormControl>
          <Button colorScheme="green" mt={6} type="submit" w="100%">
            Login
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
