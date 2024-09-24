import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, TabIndicator, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { GoDownload } from "react-icons/go";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable';
import { CiSearch } from "react-icons/ci";

const TransactionPage = () => {
  const tabs = [{
    text:"All",
    tagText: 349
  },
  {
    text:"Deposit",
    tagText: 114
  },
  {
    text:"Withdraw",
    tagText: 213
  },
  {
    text:"Trade",
    tagText: 22
  },]
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6">
        <Button leftIcon={<Icon as={GoDownload}/>}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList w="full" display="flex" pt ="4" justifyContent="space-between" pb="4">
            <HStack>
            {
              tabs.map((tab)=>(
                <Tab key={tab.text} display="flex" gap="2">
                  {tab.text} <Tag colorScheme='gray' borderRadius="full">{tab.tagText}</Tag>
                </Tab>
              ))
            }
            </HStack>

          <InputGroup maxW="200px" pb="2" pr="6">
            <InputLeftElement pointerEvents='none'>
              <Icon as={CiSearch} />
            </InputLeftElement>
            <Input type='tel' placeholder='Search...' />
          </InputGroup>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default TransactionPage  
