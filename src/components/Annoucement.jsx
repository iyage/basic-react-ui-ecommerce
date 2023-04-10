import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: teal;
    color:white;
    font-size: 20px;
    padding: 5px;
    text-align: center;
    font-family: 'lora';
    font-style: italic;
    font-weight: 200;
    @media screen and (max-width:480px) {
      height: 25px;
      font-size: 14px;
    }
`
function Annoucement() {
  return (
    <Container>Super Deal! Free shipping on Orders above $50</Container>
  )
}

export default Annoucement