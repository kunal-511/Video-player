import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Videos from './Videos';
import Upload from './Upload';
import LogIn from './LogIn';
import SignUp from './SignUp';

function App() {
  return(

    <BrowserRouter>
  <Header />
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
