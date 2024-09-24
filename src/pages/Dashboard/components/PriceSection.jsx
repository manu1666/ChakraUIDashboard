import {  Button, Flex, HStack, Icon, Stack,Text,Image, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { BsArrowUpRight } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const PriceSection = () => {
  const timeStamps = ["7:15 PM","12:55 AM","6:35 AM","12:15 PM" ,"5:55 PM"]
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">
            Wallet Balance
            </Text>
          </HStack>
          <HStack spacing={8} 
          flexDir={{base:"column",sm:"row"}} 
          align={{base:"flex-start",sm:"center"}}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">22.39401000</Text>{" "}
              <HStack fontWeight="md" color="green.500">
                <Icon as={BsArrowUpRight}/>
                <Text fontSize="sm" fontWeight="medium">22%</Text>
              </HStack>{" "}
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={CiCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={CiCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant='soft-rounded'>
       <Flex justify="end">
        <TabList bg="black.5" p='3px'>
          {
            ["1H","1D","1W","1M"].map((tab)=> (
              <Tab _selected={{bg:"white" }} 
              key={tab} 
              fontSize="sm" 
              p='6px' 
              borderRadius="4"
              >
                {tab}
              </Tab>
            ))
          }

          </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
          <Image w="100%" src="/Graph.png" mt="3rem" />
            <HStack justify="space-between">
              {timeStamps.map((timestamp)=> (
                <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </CustomCard>
  )
};

export default PriceSection