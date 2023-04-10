import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const SendMail = styled.div`
   width:70%;
    display: flex;
    align-items: center;
    border: solid 1px gray;
`
const Title = styled.h2`
font-size:70px;
font-weight: 700;
margin: 20px 0;
`
const FormInput = styled.input.attrs({placeholder:'johndoe@gmail.com'})`
flex: 90%;
    height: 40px;
    font-size: 25px;
    background-color: transparent;
    text-align: center;
    border: none;
    &:focus{
        outline: none;
    }

`
const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #7cdede;
    @media screen and (max-width:480px){
        &>${Form}{
        &>${Title}{
            font-size:30px;
            margin: 10px 0;
        }
        &>${SendMail}{
            &>${FormInput}
            {
                flex: 70%;
                height: 20px;
                font-size: 16px;
            }
            &>.send
            {
                font-size:20px;
                flex: 20%;
                padding: 0;
            }
        }
    }
    }
`

function TopFooter() {
  return (
    <Container>
        <Form>
        <Title>
            NewsLetter
        </Title>
        <SendMail>
            <FormInput/>
            <Send className='send' style={{border:'none',borderLeft:'solid gray 1px',fontSize:'50px',padding:'2px',color:'gray',flex:'5%'}}/>
        </SendMail>
        </Form>
      
    </Container>
  )
}

export default TopFooter