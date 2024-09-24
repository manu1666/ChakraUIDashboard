import React from 'react'
import { Box, HStack,Stack,Text,Icon, Heading } from "@chakra-ui/react"
import { RiDashboardFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsHeadset } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';


const Sidenav = () => {
  const location = useLocation();
  const isActiveLink = (link) =>{
    return location.pathname === link;
  };

  const navLinks = [{
    icon: RiDashboardFill,
    text: "Dashboard",
    link: "/"
  },{
    icon: FaArrowRightArrowLeft,
    text: "Transaction",
    link: "/transactions",
  }]

  //HStack {display:flex, align-items:center}

  return (
    <Stack 
    justify="space-between" 
    boxShadow={{ base:"none", lg:"lg" }} 
    w={{
      base:"full",
      lg:"16rem"
    }}
    h="100vh"
    bg="white"
    >
      <Box>
      <Heading textAlign="center" as="h1" fontSize="20px" pt="56px">
        @DOSOMECODING
      </Heading>
      <Box mt="6" mx="3">
      {navLinks.map((nav)=> (
        <Link to={nav.link} key={nav.text}>
        <HStack
        borderRadius="10px"  
           py="3" 
           px="4" 
           bg={isActiveLink(nav.link) ? "#F3F3F7" : 'transparent'}
           color={isActiveLink(nav.link) ? "#171717" : '#797E82'}
           _hover={{
           bg: "#F3F3F7",
           color: "#171717"
        }}
         
        >
          <Icon cursor="pointer" as={nav.icon} />
          <Text cursor="pointer" fontSize="14px" fontWeight="medium">{nav.text}</Text>
        </HStack>
        </Link>
      ))}
      </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to='/support'>
        <HStack
        borderRadius="10px"  
           py="3" 
           px="4" 
           bg={isActiveLink("/support") ? "#F3F3F7" : 'transparent'}
           color={isActiveLink("/support") ? "#171717" : '#797E82'}
           _hover={{
           bg: "#F3F3F7",
           color: "#171717"
        }}
        
        >
          <Icon cursor="pointer" as={BsHeadset} />
          <Text cursor="pointer" fontSize="14px" fontWeight="medium">Support</Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
    
  
  )
}

export default Sidenav
