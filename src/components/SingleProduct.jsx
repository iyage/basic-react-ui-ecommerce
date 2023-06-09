import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Popularproducts, UserCart } from "./data";

const Wrapper = styled.div`
  width: 97%;
  margin: auto;
  display: flex;
  justify-content: center;
`;
const ProdImgContainer = styled.div`
  flex: 50%;
  flex-grow: 0;
  height: 100vh;
  border: solid 1px teal;
  padding: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const ProdInfo = styled.div`
  flex: 50%;
  margin-left: 40px;
`;
const ProdDesc = styled.p`
  max-width: 600px;
  font-size: 22px;
  text-align: justify;
  font-weight: 400;
  color: gray;
`;
const ProdName = styled.h2`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 300;
`;
const ProdPrice = styled.h3`
  font-size: 60px;
  font-weight: 300;
  font-family: "Urbanist", sans-serif;
  margin: 40px 0;
`;
const Filter = styled.div`
  display: flex;
`;
const ColorFilter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 27px;
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
`;
const FilterSelector = styled.select`
  height: 40px;
  padding: 10px;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;
const FilterOption = styled.option`
  padding: 10px;
`;
const SizeSelect = styled.div`
  margin-left: 20px;
`;
const ColorSelect = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin: 0 10px;
  cursor: pointer;
`;
const BuyOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const QtyOptions = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;
const QtyOption = styled.span`
  cursor: pointer;
`;
const AddButton = styled.button`
  padding: 20px 30px;
  background-color: transparent;
  border: 2px solid teal;
  cursor: pointer;
  transition: all 0.5s ease;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    border: 2px solid black;
    color: teal;
  }
`;
const QtyValue = styled.span`
  margin: 0 30px;
  height: 50px;
  width: 50px;
  border: solid 1px teal;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    & > ${Wrapper} {
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      padding: 10px;
      & > ${ProdInfo} {
        margin-left: 0px;
        padding: 10px;
        & > ${ProdName} {
          font-size: 30px;
          font-weight: 700;
          margin: 20px;
        }
        & > ${ProdPrice} {
          font-size: 40px;
        }
        & > ${Filter} {
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
          & > ${SizeSelect} {
            margin-left: 0;
            & > ${FilterSelector} {
              width: 70%;
            }
          }
        }
        & > ${BuyOption} {
          flex-direction: column;
          align-items: stretch;
          gap: 20px;
          & > ${QtyOptions} {
            justify-content: space-evenly;
          }
        }
      }
    }
  }
`;

function SingleProduct() {
  const [prod, setProd] = useState([]);
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState("xs");
  useEffect(() => {
    window.scrollTo(0, 0);
    setProd(
      Popularproducts.filter((prod) => {
        return prod.id == id;
      })
    );
  }, []);
  function handleCart(evt) {
    if (evt === "add") {
      setQty((prev) => (prev += 1));
    } else {
      if (qty > 0) setQty((prev) => (prev -= 1));
    }
  }
  function addToCart() {
    UserCart.push({
      id: 5087467 + 10,
      prodName: prod[0].name,
      color: color,
      size: size,
      price: prod[0].price,
      qty: qty,
      img: prod[0].img,
    });
  }
  return (
    <Container>
      <Wrapper>
        {prod.map((prod) => {
          return (
            <>
              <ProdImgContainer key={prod.id}>
                <Img src={prod.img} />
              </ProdImgContainer>
              <ProdInfo>
                <ProdName>{prod.name}</ProdName>
                <ProdDesc>{prod.prodDesc}</ProdDesc>
                <ProdPrice>$ {prod.price}</ProdPrice>
                <Filter>
                  <ColorFilter>
                    <FilterText>Color: </FilterText>
                    <ColorSelect
                      bg="blue"
                      onClick={() => {
                        setColor("blue");
                      }}
                    />
                    <ColorSelect
                      bg="black"
                      onClick={() => {
                        setColor("black");
                      }}
                    />
                    <ColorSelect
                      bg="gray"
                      onClick={() => {
                        setColor("grey");
                      }}
                    />
                  </ColorFilter>
                  <SizeSelect>
                    <FilterText>Size: </FilterText>
                    <FilterSelector
                      value={size}
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}>
                      <FilterOption value={"xs"}>XS</FilterOption>
                      <FilterOption value={"s"}>S</FilterOption>
                      <FilterOption value={"m"}>M</FilterOption>
                      <FilterOption value={"l"}>L</FilterOption>
                      <FilterOption value={"xl"}>XL</FilterOption>
                    </FilterSelector>
                  </SizeSelect>
                </Filter>
                <BuyOption>
                  <QtyOptions>
                    <QtyOption>
                      <Add
                        style={{ fontSize: "30px" }}
                        onClick={() => {
                          console.log("add");
                          handleCart("add");
                        }}
                      />
                    </QtyOption>
                    <QtyValue>{qty}</QtyValue>
                    <QtyOption>
                      <Remove
                        style={{ fontSize: "30px" }}
                        onClick={() => handleCart("remove")}
                      />
                    </QtyOption>
                  </QtyOptions>
                  <AddButton onClick={addToCart}>ADD To CART</AddButton>
                </BuyOption>
              </ProdInfo>
            </>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default SingleProduct;
