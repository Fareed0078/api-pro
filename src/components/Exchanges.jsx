import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import Loader from "./Loader"


const Exchanges = () => {

  const [exchnages,setExchanges] = useState ([]);
  const [loading, setLoading] = useState (true)

 useEffect (()=>{
    
  const fetchExchanges = async()=>{
    const {data} = await axios.get(`${server}/exchanges`)

    setExchanges(data);
    console.log(data);
    setLoading(false);
  }

  fetchExchanges()

 }, [])


  return (
   <Container maxW={'container.xl'}>

    {loading? <Loader /> :<>


     <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {
          exchnages.map((i)=>(
            <ExchangeCard  
            key={i.id}
            name={i.name}
             img={i.image
             }
             rank={i.trust_score_rank
             }
             url={i.url}
             
             />
          )
          )
        }
     </HStack>
    
    </>}
   </Container>
  )
}

const ExchangeCard = ({name, img, rank, url}) => 
<a href={url} target={"blank"}>

<VStack w={"52"} shadow={"lg"} p={"7"} borderRadius={"lg"} transition={" all 0.3s"} margin={"5"} 
css={{
  "&:hover":{
    transform:"scale(1.1)",

  }
}}
>


<Img src={img} h={"10"} w={"10"} objectFit={"contain"}/>

<Heading size={"md"} noOfLines={1}>{rank}</Heading>

<Text noOfLines={1}>{name}</Text>

</VStack>

</a>



export default Exchanges
