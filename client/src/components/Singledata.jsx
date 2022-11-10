import { Box ,Text ,Container,Flex} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SingleContext } from '../Context/singleContext';
import {useNavigate} from 'react-router-dom'
import './singledata.css'

function Singledata({ prod_name, imgUrl, price,el }) {

 
  const {setPagedata} = useContext(SingleContext)
  const nav = useNavigate()
  
  return (
    <Container mt="100px" cursor='pointer' onClick={()=>{
      setPagedata(el)
      nav("/moredetails")
      }}>
      <Box className="single_data">
        <img src={imgUrl} alt="mage" />
        <Flex justify="space-between">
          <Text fontSize="xs">{prod_name}</Text>
          <Text fontSize="xs">{price}</Text>
        </Flex>

        <Box className="single_data_text">
          <Text fontSize="sm">
            join life /<span style={{fontWeight:"lighter"}}>collection</span>{" "}
          </Text>
        </Box>

       
      </Box>
    </Container>
  );
}

export default Singledata
