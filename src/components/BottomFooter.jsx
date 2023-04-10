import { FacebookRounded, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 97%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Logo = styled.h2`
    font-size: 25px;
    font-weight: 700;
    font-family: 'lora';
    font-style: italic;
`
const SiteDesc = styled.p`
    padding: 10px;
    text-align: justify;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 2px;
`
const Left = styled.div`
flex: 32%;
flex-grow: 0;
`
const Center = styled.div`
flex: 32%;
flex-grow: 0;
`
const Right = styled.div`
flex: 32%;
flex-grow: 0;
`
const Social = styled.div`
    margin-top: 20px;
    &>*{
        margin-left: 10px;
    }
    &>.icon{
       font-size:70px;
       color:rgb(3,114,231)
    }
`
const LinkTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`
const Links = styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin: 30px;
`
const Link = styled.div`
    flex:45%;
    flex-grow: 0;
    flex-shrink: 0;
    margin:6px 0;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        color:teal;
    }
`

const ContactTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;
    text-align: start;
    margin-bottom: 30px;
`
const Contact = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`
const ContactIcon = styled.div`
    flex:3%;
  
`
const ContactText = styled.div`
    flex:97%;
    margin-left: 10px;
`
const PaymentContainer = styled.div`
    width: 60%;
    margin-top: 20px;
`
const Container = styled.div`
    width: 100%;
    margin: 40px 0;
    @media screen and (max-width:480px) {
        &>${Wrapper}{
        flex-direction: column;
        &>${Left}{
            display: flex;
            flex-direction: column;
            align-items: center;
            &>${SiteDesc}{
                font-size: 14px;
                color: gray;
            }
            &>${Social}{
                &>.icon{
                 margin-left:20px;
                 font-size: 40px;
                }
            }
        }
        &>${Center}{
            margin-top: 20px;
            &>${LinkTitle}{
                font-size: 20px;
            }
            &>${Social}{
                &>.icon{
                 margin-left:20px;
                 font-size: 40px;
                }
               
            }
        }

        &>${Right}{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    }
   
`


function BottomFooter() {
  return (
    <Container>
        <Wrapper>
    <Left>
    <Logo className='logo'>BridgeHead.</Logo>
    <SiteDesc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis cupiditate fugiat, illo autem optio accusantium perferendis sint voluptatum nemo adipisci modi sit quod similique earum in at praesentium! Cum!
    </SiteDesc>
    <Social>
        <FacebookRounded className='icon' />
        <Instagram className='icon'  style={{color:'rgb(246,0,171)'}}/>
        <Twitter className='icon' style={{color:'rgb(29,161,241)'}}/>
        <Pinterest  className='icon'   style={{color:'rgb(203,32,40)'}}/>
    </Social>
    </Left>
    <Center>
        <LinkTitle>Useful Links</LinkTitle>
        <Links>
        <Link>Home</Link>
        <Link>Cart</Link>
        <Link>Men Fashion</Link>
        <Link>Women Fashion</Link>
        <Link>Accessories</Link>
        <Link>My Account</Link>
        <Link>Order Tracking</Link>
        <Link>Wishlist</Link>
        <Link>Terms & Conditions</Link>
        </Links>
    </Center>
    <Right>
        <ContactTitle>
            Contact
        </ContactTitle>
        <Contact>
            <ContactIcon><Room/></ContactIcon>
            <ContactText>49 Afolabi Yussuf Street</ContactText>
        </Contact>
        <Contact>
            <ContactIcon><Phone/></ContactIcon>
            <ContactText>0802567999999</ContactText>
        </Contact>
        <Contact>
            <ContactIcon><Mail/></ContactIcon>
            <ContactText>johndoe@gmail.com</ContactText>
        </Contact>
        <PaymentContainer>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" srcset="" />
        </PaymentContainer>
    </Right>
        </Wrapper>
    </Container>
  )
}

export default BottomFooter