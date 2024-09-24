import React from 'react'
import { Container, Box, Flex, Menu, MenuButton, MenuList,MenuItem,Heading,Button, HStack, Icon } from '@chakra-ui/react'
import { FaBars, FaUserTie } from "react-icons/fa";

const Topnav = ({ title,onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack 
      maxW="1000px"  
      h="16" 
      justify="space-between" 
      px="32"
      mx="auto"> 
        <Icon as={FaBars} cursor="pointer" onClick={onOpen} display={{
          base: "block",
          lg: "none"
        }}/>
        <Heading fontSize="28px" fontWeight="md">{title}</Heading>
        <Menu>
          <MenuButton>
           <Icon as={FaUserTie} fontSize="xl" />
          </MenuButton>
          <MenuList>
            <MenuItem>Purchases</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}

export default Topnav
