import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../assests/images/slider1.png';
import img2 from '../assests/images/slider2.png';
import img3 from '../assests/images/slider3.png';

const SliderItem = styled.div`
    width: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
`

const SliderImg = styled.div`
    height: 80%;
    flex: 1;
`
const ProdDetails = styled.div`
    flex: 1;
    letter-spacing: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ProdTitle = styled.h2`
    font-size: 70px;
    margin-bottom: 30px;
`
const ProductDesc = styled.p`
    font-size: 20px;
`
const BuyButton = styled.button`
    width:200px;
    height: 70px;
    margin-top: 120px;
    font-size: 18px;
    font-weight: 700;
    color: #6b6666;
    background-color: transparent;
    border: 3px solid ;
    cursor: pointer;
`
const Arrows = styled.span`
position: absolute;
background-color: #e5dcdc;
height: 40px;
width: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
top:50%;
opacity: 0.5;
cursor: pointer;
font-size: 14px;
bottom: 0;
  left: ${props=> props.direction==="left" && "10px"};
     right: ${props=> props.direction==="right" && "10px"};
     z-index: 5;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
transform: translateX(${(props) => props.slideIndex * -100}vw);
transition: all 2s ease;
`

const Continer = styled.div`
    height: 90vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    margin-bottom: 30px;
    @media screen and (max-width:480px) {
     display: none;
    }
  `




function Slider() {
    const [slideIndex,setSlideIndex] = useState(0);
    function handleClick(dir){
     console.log(dir)
     if(dir==='left') {
        setSlideIndex(slideIndex>0 ? slideIndex-1:2)
        console.log(slideIndex)
    }
   else {
        setSlideIndex(slideIndex<2 ? slideIndex+1:0)
    };
   
    }
  return (
    <Continer>
    <Arrows direction="left"   onClick={()=>handleClick('left')}><ArrowBackIosOutlined style={{fontSize:'16px'}} /></Arrows>
    <Arrows direction="right" onClick={()=>handleClick('right')}><ArrowForwardIosOutlined style={{fontSize:'16px'}} /></Arrows>
    <Wrapper slideIndex={slideIndex}>
        <SliderItem>
            <SliderImg>
                <img src={img1} alt=""/>
            </SliderImg>
            <ProdDetails>
                <ProdTitle fontSize={slideIndex}>SUMMER SALE</ProdTitle>
                <ProductDesc>
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS
                </ProductDesc>
                <BuyButton>SHOP NOW</BuyButton>
                </ProdDetails>
        </SliderItem>
        <SliderItem>
            <SliderImg>
                <img src={img3} alt=""/>
            </SliderImg>
            <ProdDetails>
                <ProdTitle>SUMMER SALE</ProdTitle>
                <ProductDesc>
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS
                </ProductDesc>
                <BuyButton>SHOP NOW</BuyButton>
                </ProdDetails>
        </SliderItem>
        <SliderItem>
            <SliderImg>
                <img src={img2} alt=""/>
            </SliderImg>
            <ProdDetails>
                <ProdTitle>SUMMER SALE</ProdTitle>
                <ProductDesc>
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS
                </ProductDesc>
                <BuyButton>SHOP NOW</BuyButton>
                </ProdDetails>
        </SliderItem>
    </Wrapper>
    </Continer>
  )
}

export default Slider