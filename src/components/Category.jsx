import React, { useEffect } from "react";
import styled from "styled-components";
import { Dresses } from "./data";
import ProdList from "./ProdList";
const ProdType = styled.h1`
  font-size: 50px;
  margin: 10px 0;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  text-align: right;
`;
const Select = styled.select`
  height: 40px;
  margin: 20px 10px;
  padding: 10px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
const Option = styled.option`
  width: 100%;
`;
const FilterText = styled.span`
  font-weight: 600;
  font-size: 25px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
const ProdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    justify-content: center;
    margin: 10px 10px;
  }
`;
const Container = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 40px;
  @media screen and (max-width: 480px) {
    & > ${FilterContainer} {
      flex-direction: column;
      align-items: stretch;
      & > ${Right} {
        text-align: start;
      }
    }
  }
`;
function Category() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <ProdType>Dresses</ProdType>
      <FilterContainer>
        <Left>
          <FilterText>Filter Products: </FilterText>
          <Select name="" id="">
            <Option value="" disabled selected>
              Color
            </Option>
            <Option value="">Red</Option>
            <Option value="">Yellow</Option>
            <Option value="">Green</Option>
            <Option value="">Blue</Option>
            <Option value="">Black</Option>
            <Option value="">White</Option>
          </Select>
          <Select name="" id="">
            <Option value="" disabled selected>
              Size
            </Option>
            <Option value="">XS</Option>
            <Option value="">S</Option>
            <Option value="">M</Option>
            <Option value="">LG</Option>
            <Option value="">XL</Option>
          </Select>
        </Left>
        <Right>
          <FilterText>Sort Products: </FilterText>
          <Select name="" id="">
            <Option value="">Newest</Option>
            <Option value="">Price(asc)</Option>
            <Option value="">Price(dsc)</Option>
          </Select>{" "}
        </Right>
      </FilterContainer>
      <ProdWrapper>
        {Dresses.map((prod) => (
          <ProdList prod={prod} />
        ))}
      </ProdWrapper>
    </Container>
  );
}

export default Category;
