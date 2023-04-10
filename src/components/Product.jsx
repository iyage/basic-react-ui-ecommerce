import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const InfoContainer = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0,0.2);
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
`
const ShoppingButtons= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  &>.icon{
    height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  color: white;
  &:hover{
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
  }
`
const  Container = styled.div`
  flex: 24%;
  flex-shrink: 0;
  flex-grow: 0;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.3);
  margin:10px 0;
  padding: 20px;
  min-width: 300px;
  height: 400px;
  position: relative;
  cursor: pointer;
  &:hover ${InfoContainer}{
    opacity: 1;
  }
`
 const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
` 
function Product({prod}) {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <Container key={prod.id}>
      <Img src={prod.img}/>
      <InfoContainer>
        <ShoppingButtons>
        <Link className='icon' to='#'> <ShoppingCartOutlined/></Link>
        <Link className='icon' to='#'> <FavoriteBorderOutlined  /></Link>
     <Link className='icon' to='single-page'> <SearchOutlined /></Link> 
        </ShoppingButtons>
      </InfoContainer>
    </Container>
  )
}

export default Product