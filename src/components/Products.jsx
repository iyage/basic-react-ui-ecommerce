import React from 'react'
import styled from 'styled-components'
import { Popularproducts } from './data'
import Product from './Product'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  @media screen and (max-width:480px) {
    justify-content: center;
  }
`
function Products() {
  return (
    <Container>
      {
        Popularproducts.map((prod)=>{
          return( <Product prod={prod}/>)
        })
      }
    
    
    
    </Container>
  )
}

export default Products