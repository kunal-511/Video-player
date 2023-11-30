import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './Assets/1.jpg';
import img2 from './Assets/2.jpg';
import img3 from './Assets/3.jpg';
import img4 from './Assets/4.jpg';
import img5 from './Assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container minH={'100vh'} maxW={'container.xl'} padding={'16'}>
          <Heading
            textTransform={'uppercase'}
            borderBottom={'2px solid'}
            margin={'auto'}
            py={'2'}
            w={'fit-content'}
          >
            Services
          </Heading>
          <Stack h={'full'} p={"4"} alignItems={'center'} direction={['column', 'row']}>

            <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aliquam explicabo accusamus, nam eveniet, quis debitis nesciunt natus iure quos, exercitationem perspiciatis aut incidunt! Provident ab fuga iste velit itaque! Error obcaecati aliquam adipisci ratione laudantium soluta qui praesentium. Ratione quisquam error quibusdam neque corporis ullam illum provident a officia optio ipsam asperiores exercitationem, accusantium reprehenderit pariatur est repudiandae consequatur officiis eveniet. Perferendis dolores expedita explicabo quaerat, sint odio voluptas hic cum culpa sapiente unde distinctio repudiandae praesentium quibusdam ex ut libero recusandae voluptatem et blanditiis. Officia, debitis? Perspiciatis ut iste laudantium explicabo iure impedit libero beatae consequuntur sint culpa!
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
          Future is gaming
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
