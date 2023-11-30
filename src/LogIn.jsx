import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
  Container,
} from '@chakra-ui/react';
const LogIn = () => {
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={'96'}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
            <Input
              placeholder="Email"
              type="Email"
              required
              focusBorderColor="purple.500"
           />
           <Input
              placeholder="Password"
              type="Password"
              required
              focusBorderColor="purple.500"
           />
           <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to="/forgetpassword" >Forget Password?</Link>
           </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default LogIn;
