import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid 
      gridTemplateColumns={{
        base: "repeat(1,1 fr)",
        xl: "repeat(2,1 fr)",
      }}
      gap={6}
      >
        <GridItem
        colSpan={{base:1,md:2}}>
          <PortfolioSection/>
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection/>
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions/>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard ImgUrl="Visual.png" 
          text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
          tagText="Loan"
          invertedPropert={false}/>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
          ImgUrl="VisualPurple.png" 
          text="Learn more about our real estate, mortgage, and  corporate account services"
          tagText="Contact"
          invertedProperty={true}/>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
