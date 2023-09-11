import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Container, HStack, Img, Text, VStack, Heading, Radio, RadioGroup} from '@chakra-ui/react';
import Loader from "./Loader"


const Coin = () => {

  const [coins,setCoins] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [currency, setCurrency] = useState("pkr");
  

 useEffect (()=>{
    
  const fetchCoins = async()=>{
    const {data} = await axios.get(`
    ${server}/coins/markets?vs_currency=${currency}`)

    setCoins(data);
    console.log(data);
    setLoading(false);
  }

  fetchCoins()

 }, [currency])


  return (
   <Container maxW={'container.xl'}>

    {loading? <Loader /> :<>


    <RadioGroup value={currency}  onChange={ setCurrency} p={8}>
      <HStack>
      <Radio value='pkr'>PKR</Radio>
      <Radio value='usd'>USD</Radio>
      <Radio value='eur'>EUR</Radio>

      </HStack>
    </RadioGroup>

     <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {
          coins.map((i)=>(
            <ExchangeCard  
            key={i.id}
            name={i.name}
             img={i.image
             }
             url={i.url}
             price={i.current_price}
             rank={i.market_cap_rank
             }
             
             />
          )
          )
        }
     </HStack>
    
    </>}
   </Container>
  )
}

const ExchangeCard = ({name, img, url, price, rank, currencySmybol=""}) => 
<a href={url} >

<VStack w={"52"} shadow={"lg"} p={"7"} borderRadius={"lg"} transition={" all 0.3s"} margin={"5"} 
css={{
  "&:hover":{
    transform:"scale(1.1)",

  }
}}
>


<Img src={img} h={"10"} w={"10"} objectFit={"contain"}/>



<Text noOfLines={1}>{name}</Text>

<Heading size={"md"} noOfLines={1}>{rank}</Heading>

<Text noOfLines={1}>{currencySmybol} {price}</Text>



</VStack>

</a>





export default Coin
