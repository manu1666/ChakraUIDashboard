import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
    <Stack spacing={6}>
    <Text fontWeight="md" fontSize="sm">You will receive response within 24 hours of time of submit.</Text>
    <HStack flexDir={{base:'col' ,md:'row'}}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Enter your name'/>
      </FormControl>
      <FormControl>
        <FormLabel>Surname</FormLabel>
        <Input type='text' placeholder='Enter your surname'/>
      </FormControl>
    </HStack>
    <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' placeholder='Enter your email'/>
    </FormControl>
    <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder='Enter your message'/>
    </FormControl>
    <Checkbox defaultChecked>
      <Text fontSize="x-small"> 
      I agree with the
      <Box as="span" color="p.purple"> Terms & Conditions</Box>
      </Text>
    </Checkbox>
    <Stack>
      <Button fontSize="small">Send a message</Button>
      <Button fontSize="small" colorScheme='gray'>Book a meeting</Button>
    </Stack>
  
    </Stack>
  </Card>
  )
}

export default ContactCard