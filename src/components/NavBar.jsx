import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const Center = styled.div`
  flex: 1;
  flex-shrink: 0;
`;
const Right = styled.div`
  flex: 1;
  text-align: right;
  flex-shrink: 0;
`;
const Language = styled.h3`
  font-size: 14px;
  cursor: pointer;
  font-weight: 300;
`;
const SearchContainer = styled.div`
  border: solid 1px #bdb7b7;
  color: gray;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  & > .search-icon {
    font-size: 18px;
    color: grey;
  }
`;
const SearchInput = styled.input`
  border: none;
  height: 16px;
  &:focus {
    outline: none;
  }
`;
const Logo = styled.h2`
  font-size: 25px;
  font-weight: 700;
  font-family: "lora";
  font-style: italic;
  text-align: center;
`;
const MenuItem = styled.span`
  margin-left: 10px;
`;
const Wrapper = styled.div`
  width: min(93vw, 93.2%);
  margin: auto;
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000000000;
  background-color: white;

  @media screen and (max-width: 480px) {
    & > ${Wrapper} {
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      & > ${Right} {
        text-align: start;
        display: flex;
        justify-content: space-evenly;
        margin-top: 10px;
      }
      & > ${Left} {
        justify-content: space-evenly;
        margin-bottom: 10px;
        & > ${SearchContainer} {
          width: 100%;
        }
      }
    }
  }
`;

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Search className="search-icon" />
            <SearchInput />
          </SearchContainer>
        </Left>
        <Center>
          <Logo className="logo">Basic React UI.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined color="action" />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <Annoucement />
    </Container>
  );
}

export default NavBar;
