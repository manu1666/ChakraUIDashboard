import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HiCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyRupee } from "react-icons/hi2";
import { TbCoinBitcoinFilled } from "react-icons/tb";
import { Stack,HStack,Text, Box,Flex,Icon, Grid, Divider, Button } from '@chakra-ui/react';
const Transactions = () => {
  const transaction = [
    {
      id: "1",
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM"
    },
    {
      id: "2",
      icon: TbCoinBitcoinFilled,
      text: "BTC Sell",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM"
    },
    {
      id: "3",
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM"
    }
  ]
  return (
    <CustomCard>
      <Text fontSize="sm" color="black.80" paddingBottom="24px">Recent Transactions</Text>
      <Stack>
        {
          transaction.map((item,i)=>(
            <Fragment key={item.id}>
              {i!=0 && <Divider />}
              <Flex gap="4" w="full">
              <Grid 
              placeItems="center" 
              bg="black.5" 
              boxSize={10} 
              borderRadius="full"
              >
                <Icon as={item.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{item.text}</Text>
                  <Text fontSize="sm" color="black.40">{item.timestamp}</Text>
                </Stack>
                <Text textStyle="h6">{item.amount}</Text>
              </Flex>
            </Flex>
            </Fragment>
          ))
        }
      </Stack>
      <Button w="full" colorScheme='gray' mt="6">View All</Button>
    </CustomCard>
  )
}

export default Transactions