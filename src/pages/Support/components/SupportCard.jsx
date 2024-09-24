import { 
  Box, 
  Button, 
  Card, 
  Checkbox, 
  Flex, 
  FormControl, 
  FormLabel, 
  HStack, 
  Icon,
  Input, 
  Stack, 
  Text, 
  Textarea 
} from '@chakra-ui/react'
import React from 'react'
import { CiMail } from "react-icons/ci";
const SupportCard = ({leftComponent,icon,title,text}) => {
  return (
    <Flex 
    gap={6} 
    flexDir={{
      base:'col' 
      ,xl:'row'
      }}
      >
      <Stack maxW="380px">
        <Icon color="p.purple" boxSize="24px" as={icon} />
        <Text fontWeight="md" as="h1" textStyle="h1">{title}</Text>
        <Text textStyle="h6" fontSize="sm" color="black.60">{text}</Text>
      </Stack>

      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
      
    </Flex>
  )
}

export default SupportCard