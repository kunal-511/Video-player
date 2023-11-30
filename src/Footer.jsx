import React from 'react'
import {Box, Stack, VStack, Heading, HStack, Button, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>

<VStack alignItems={'stretch'} w={'full'} px={'4'}>
    <Heading size={'md'} textTransform={'uppercase'}>
        Subscribe to get updates
    </Heading>
    <HStack borderBottom={'2px solid white'}>
        <Input placeholder='Enter Email Here....' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
         <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={'20'}/>
         </Button>
    </HStack>
</VStack>
<VStack  w={'full'}
borderRight={['none', '1px solid white']}
borderLeft={['none', '1px solid white']}
>
<Heading textTransform={'uppercase'} textAlign={'center'}>WatchFusion</Heading>
<Text>All rights received</Text>
</VStack>
<VStack  w={'full'}>
<Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
<Button variant={'link'} color='whiteAlpha'><a target='blank'  href="https://www.youtube.com/">Youtube</a></Button>
<Button variant={'link'} color='whiteAlpha'><a target='blank' href="https://instagram.com">Instagram</a></Button>
<Button variant={'link'} color='whiteAlpha'><a target='blank' href="https://gitHub.com">GitHub</a></Button>
</VStack>
        </Stack>

    </Box>
      
    </>
  )
}

export default Footer
