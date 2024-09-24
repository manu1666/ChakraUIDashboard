import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Card, Stack } from '@chakra-ui/react'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { CiMail } from 'react-icons/ci'
import { FaMessage } from "react-icons/fa6";
import InfoCard from '../Dashboard/components/InfoCard'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="80px" justify={{lg:"center"}}>
        <SupportCard 
        leftComponent={<ContactCard/>} 
        title="Contact Us" 
        text="Have a question or just want to know more? Feel free to reach out to us."
        icon={CiMail}/>

        <SupportCard 
        leftComponent={
        <InfoCard 
        ImgUrl="VisualPurple.png" 
        text="Learn more about our real estate, mortgage, and  corporate account services"
        tagText="Contact"
        invertedProperty={true}
        />} 
        title="Live Chat" 
        text="Don't have time to wait for the answer ? Chat with us now."
        icon={FaMessage}/>
      </Stack>
    </DashboardLayout>
  )
}

export default Support