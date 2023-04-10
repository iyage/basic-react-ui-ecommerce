import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
width: 98%;
` 
 const Img = styled.img`
  width: 100%;
  height:600px;
  object-fit: cover;
` 
const Category = styled.div`
    flex: 1;
    flex-shrink: 0;
    flex-grow: 1;
    position: relative;
    min-width: 300px;
`
const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 40%;
    left: 30%;
    color: teal;
`
const Title = styled.h3`
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 20px;
`
const BuyBotton = styled.button`
    width: 100px;
    height: 50px;
    border: none;
    color: #a39b9b;
    font-weight: 700;
    cursor: pointer;
`
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Container = styled.div`
width: 95%;
margin: auto;
margin-top: 30px;
@media screen and (max-width:480px) {
    width: 90%;
margin: auto;
    margin-top: 30px;
    &>${Wrapper}{
        &>${Category}{
            &>${InfoContainer}{
        left: 20%;

        &>${ Title}{
            font-size: 30px;

        }
        }
      
    }
    }
 

}
`

function Categories() {
  return (
    <Container>
<Wrapper>
    <Category>
        < ImgContainer>
        <Img src='https://images.unsplash.com/photo-1598554793905-075f7b355cd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        </ImgContainer>
        <InfoContainer>
            <Title>SHIRT STYLE!</Title>
            <BuyBotton>SHOP NOW</BuyBotton>
        </InfoContainer>
        
      
    </Category>
    <Category>
    < ImgContainer>
        <Img src='https://images.unsplash.com/photo-1624309845812-a7c7e12259f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
        </ImgContainer>
        <InfoContainer>
            <Title>SHIRT STYLE!</Title>
            <BuyBotton>SHOP NOW</BuyBotton>
        </InfoContainer>
    </Category>
    <Category>
    < ImgContainer>
        <Img src='https://images.unsplash.com/photo-1616847220575-31b062a4cd05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
        </ImgContainer>
        <InfoContainer>
            <Title>SHIRT STYLE!</Title>
            <BuyBotton>SHOP NOW</BuyBotton>
        </InfoContainer>
    </Category>
</Wrapper>
    </Container>
  )
}

export default Categories