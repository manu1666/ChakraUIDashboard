import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Stack, Text, Tag,} from '@chakra-ui/react'

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123.10",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  return (
  <TableContainer>
    <Table variant='simple' colorScheme='gray'>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>DATE AND TIME</Th>
          <Th>TYPE</Th>
          <Th>AMOUNT</Th>
          <Th>STATUS</Th>
        </Tr>
      </Thead>
      <Tbody color="p.black">
        {
          tableData.map((data)=>(
            <Tr key={data.id}>
              <Td fontSize='14px' fontWeight='500' lineHeight='18px'>{data.id}</Td>

              <Td>
                <Stack spacing={0}>
                  <Text fontSize='14px' fontWeight='500' lineHeight='18px'>{data.date}</Text>
                  <Text fontSize='12px' fontWeight='400' lineHeight='14px' color='black.60'>{data.time}</Text>
                </Stack>
              </Td>

              <Td>
                <Stack Stack spacing={0}>
                  <Text fontSize='14px' fontWeight='500' lineHeight='18px'>{data.type.name}</Text>
                  <Text fontSize='12px' fontWeight='400' lineHeight='14px' color='black.60'>{data.type?.tag}</Text>
                </Stack>
              </Td>

              <Td fontSize='14px' fontWeight='500' lineHeight='18px'>{data.amount}</Td>
              
              <Tag bgColor={statusColor[data.status]} color="white" borderRadius="full">
                {data.status}
              </Tag>

            </Tr>
          ))
        }
      </Tbody>
      
    </Table>
</TableContainer>
  )
}

export default TransactionTable