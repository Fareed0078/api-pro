import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
    <button variant={"unstyled"} style={{color:'white'}} >
      <Link to="/">Home</Link>
    </button>
    <button variant={"unstyled"} style={{color:'white'}}>
      <Link to="/exchange">Exchanges</Link>
    </button>
    <button variant={"unstyled"} style={{color:'white'}}>
      <Link to="/coin">Coins</Link>
    </button>

  </HStack>
  )
}

export default Header
