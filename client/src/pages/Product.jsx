import Announcement from '../components/Announcement';
import Footer from "../components/Footer";
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { addProduct } from '../redux/cartRedux';


const Container = styled.div`  `

const Wrapper = styled.div`
    display:flex;
    padding: 50px;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding-left: 50px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    margin-bottom: 20px;
`

const Desc = styled.p`
    margin-bottom: 20px;`

const Price = styled.span`
    margin-bottom: 20px;
    font-weight: 200;
    font-size: 30px;
`

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 30px;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const FilterColor = styled.div`
    width: 20px;
    height:20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const AddContainer = styled.div`
    justify-content: space-between;
    width: 50%;
    align-items: center;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    font-weight: 700;
`


const Amount= styled.span`
    font-size: 20px;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`


const Button = styled.button`
    padding: 15px;
    border: 1px solid;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        color: gray;
        box-shadow: 2px 2px;
    }
`

function Product() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
    
      const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };
    
       const handleClick = () => {
         dispatch(
            addProduct({ ...product, quantity, color, size })
         );
       };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product;