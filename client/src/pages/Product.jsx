import Announcement from '../components/Announcement';
import Footer from "../components/Footer";
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

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
  return (
    <Container>
        <Announcement />
        <Navbar />
        
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                tristique tortor pretium ut. Curabitur elit justo, consequat id
                condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product;