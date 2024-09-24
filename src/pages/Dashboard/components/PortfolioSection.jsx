import { Button, HStack, Icon, Stack,Tag,Text } from '@chakra-ui/react'
import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";


const PortfolioSection = () => {
  return (
  <HStack bg="white" 
  borderRadius="xl" 
  p="6" 
  justify="space-between" 
  flexDirection={{base:"column",xl:"row"}} 
  align={{base:"flex-start",xl:"center"}}
  spacing={{base: "4" ,xl: "0"}}>

  <HStack 
  spacing={{base: "0",xl: "16"}}
  flexDirection={{base:"column",xl:"row"}} 
  align={{base:"flex-start",xl:"center"}}
  >
    <Stack>
      <HStack color="black.80">
        <Text fontSize="sm">
        Total Portfolio Value
        </Text>
        <Icon as={CiCircleInfo}/>
      </HStack>
      <Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
    </Stack>

    <Stack>
      <HStack color="black.80">
        <Text fontSize="sm">
        Wallet Balance
        </Text>
      </HStack>
      <HStack spacing={8} 
      flexDirection={{base:"column",sm:"row"}} 
      align={{base:"flex-start",sm:"center"}}>
        <HStack>
          <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag colorScheme='gray'>BTC</Tag>
        </HStack>
        <HStack>
          <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text> <Tag colorScheme='gray'>INR</Tag>
        </HStack>
      </HStack>
    </Stack>
  </HStack>

    <HStack>
      <Button leftIcon={<Icon as={PiHandDeposit} />}>Deposit</Button>
      <Button leftIcon={<Icon as={PiHandWithdraw} />}>Withdraw</Button>
    </HStack>

  </HStack>
  );
};

export default PortfolioSection;