import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag,Text } from '@chakra-ui/react'


const InfoCard = ({ ImgUrl ,text ,tagText,invertedProperty}) => {
  return (
    <CustomCard color={invertedProperty ? "white" : "black" } bgColor={invertedProperty ? "p.purple" : "white"} bgImage={ ImgUrl } bgSize="cover" bgRepeat="no-repeat">

      <Tag bg={invertedProperty ? "white" : "p.purple"} color={invertedProperty ? "p.purple" : "white"} borderRadius="full">{tagText}</Tag>

      <Text mt="4" fontWeight="medium" textStyle="h5">{text}</Text>

    </CustomCard>
  )
}

export default InfoCard