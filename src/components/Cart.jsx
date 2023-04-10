import { Add, Remove } from '@mui/icons-material'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UserCart } from './data'
const Header = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
    margin-bottom: 30px;
`
const Left = styled.div`
    flex: 1;
    flex-grow: 0;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    text-align: right;
    flex-grow: 0;
   
`
const CartInfo = styled.span`
margin: 0 20px;
font-size: 20px;
text-decoration: underline;
    
`
const Wrapper = styled.div`
    display: flex;
    width: 98%;
    margin: auto;
    justify-content: space-between;
`
const CartItems =styled.div`
    flex:73%;
    flex-grow: 0;
`
const CartItem =styled.div`
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.3);
  width: 100%;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
`
const ProdImgContainer = styled.div`
    flex:1;
    height:250px;
    padding: 20px;
`
const Img = styled.img`
 width: 100%;
 height: 100%;
 object-fit: contain;
`
const ProdInfo = styled.div`
    flex:2;
`
const ProdName= styled.span`
    font-weight: 100;
    font-size: 20px;
    color: gray;
`
const OrderId= styled.span`
    font-weight: 100;
    font-size: 20px;
    color: gray;
`
const OrderSize= styled.span`
    font-weight: 100;
    font-size: 20px;
    color: gray;
`
const ProdText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;

`
const OrderColor = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${props=>props.bg};
`
const CartTotal = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const CartSummary =styled.div`
    flex:25%;
    flex-grow: 0;
`
const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    border: ${props=>(props.btnType)==='conShoping'?'2px solid black':'none'};
    color:${props=>(props.btnType)==='conShoping'?'black':'white'};
    background-color: ${props=>(props.btnType)==='conShoping'?'white':'black'};
  width: ${props=>(props.lgbtn)==='lg'&& '100%'};
  @media screen and (max-width: 480px) {
            padding: 5px 5px;
            font-size: 10px;
           padding: ${props=>(props.lgbtn)==='lg'&& '10px 20px'};
    }
`
const SummaryCard = styled.div`
    width: 100%;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.3);
    padding: 10px 0;
`
const QtyOptions = styled.div`
    padding: 20px;
    display: flex;
    align-items:center ;
`
const QtyOption = styled.span`
cursor: pointer;
`
const QtyValue = styled.span`
margin: 0 10px;
    font-size: 30px;
`
const ProdPrice = styled.h3`
    font-size: 40px;
    font-weight: 400;
`
const OrderSummaryHeading = styled.h1`
    text-align: center;
    font-weight: 100;
`
const OrderSumaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    margin-top: 20px;
`
const Text = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const SubTotal = styled.div`
text-align: right;
font-size: 18px;
`
const ShippingCost = styled.div`
text-align: right;
font-size: 18px;
`
const Discount = styled.div`
text-align: right;
font-size: 18px;
`
const Total = styled.div`
text-align: right;
font-size: 24px;
font-weight: 600;
`
const ButtonWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  padding: 0 20px ;
`
const Container = styled.div`
width: 100%;
margin-top: 70px;
@media screen and (max-width: 480px) {
    &>${Header}{
        justify-content: space-between;
        align-items: center;
        &>${Center}{
          &>${CartInfo}{
            font-size: 16px;
            margin: 0px 5px;
          }
        }
        &>${Right}{
           display: none;
        }
    }
    &>${Wrapper}{
        flex-direction: column;
        &>${CartItems}{
            &>${CartItem}
            {
                flex-direction: column;
                width: 90%;
                margin: auto;
                margin-bottom:10px;
                &>${CartTotal}
                {
                flex-direction: row;
                justify-content: space-between;
                }
            }
        }
        &>${CartSummary}{
            &>${SummaryCard}{
                width:90%;
                margin:auto;
                &>${OrderSummaryHeading}{
                    font-size: 23px;
                }
            }
        }
    }
}
`


function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <Container>
        <Header>
            <Left><Button btnType='conShoping'>CONTINUE SHOPPING</Button></Left>
            <Center>
                <CartInfo>Shopping Bag(2)</CartInfo>
                <CartInfo>Your WhishList(2)</CartInfo>
                </Center>
            <Right>
            <Button btnType='chkout'>CHECKOUT NOW</Button>
            </Right>
            
        </Header>
        <Wrapper>
            <CartItems>
                {UserCart.map((item)=>{
                    return (
                        <CartItem key={item.id}>
                                  <ProdImgContainer>
                    <Img src={item.img}/>
                </ProdImgContainer>
                <ProdInfo>
                  <div style={{margin:'30px 0'}}><ProdText>Product: </ProdText> <ProdName>{item.prodName}</ProdName></div>
                  <div style={{margin:'30px 0'}}><ProdText>ID: </ProdText> <OrderId>{item.id}</OrderId></div>

                  <div style={{margin:'30px 0'}}><OrderColor bg={item.color}></OrderColor></div>
                  <div style={{margin:'30px 0'}}><ProdText>SIZE: </ProdText> <OrderSize>item.price</OrderSize></div>
                </ProdInfo>
                <CartTotal>
                <QtyOptions>
            <QtyOption><Add style={{fontSize:'30px'}}/></QtyOption>
            <QtyValue>{item.qty}</QtyValue>
            <QtyOption><Remove style={{fontSize:'30px'}}/></QtyOption>
        </QtyOptions>
        <ProdPrice>{item.price}</ProdPrice>
                </CartTotal>
                </CartItem>
                    )
                })}
                </CartItems>
            <CartSummary>
            <SummaryCard >
                <OrderSummaryHeading>ORDER SUMMARY</OrderSummaryHeading>
                <OrderSumaryItem>
                    <Text>Subtotal</Text>
                    <SubTotal>
                        $ 70
                    </SubTotal>
                </OrderSumaryItem>
                <OrderSumaryItem>
                    <Text>Shipping Estimate</Text>
                    <ShippingCost>
                        $ 20
                    </ShippingCost>
                </OrderSumaryItem>
                <OrderSumaryItem>
                    <Text>Shipping Estimate</Text>
                    <Discount>
                        $ 20
                    </Discount>
                </OrderSumaryItem>
                <OrderSumaryItem>
                    <Text style={{fontSize:'24px',fontWeight:'600'}}>Total</Text>
                    <Total >
                        $ 100
                    </Total>
                </OrderSumaryItem>
            <ButtonWrapper> <Button lgbtn='lg'>CHECKOUT NOW</Button></ButtonWrapper>
               
              
            </SummaryCard>
            </CartSummary>
        </Wrapper>
    </Container>
  )
}


export default Cart