import React from 'react'
import styled from 'styled-components'
import BottomFooter from './BottomFooter'
import TopFooter from './TopFooter'
const Container = styled.div`
    width: 100%;
    margin-top: 40px;
`
function Footer() {
  return (
    <Container>
        <TopFooter/>
      <BottomFooter/>
    </Container>
  )
}

export default Footer