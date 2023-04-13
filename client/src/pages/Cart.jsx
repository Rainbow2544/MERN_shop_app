import React from 'react';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopTexts = styled.div`
${mobile({ display:"none"})}`;

const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0px 15px;
`;

const TopButton = styled.button`
    padding: 10px ;
    cursor: pointer;
    font-weight: 600;
    border: ${(props) => props.type === "filled" && "none"};
    color: ${(props) => props.type === "filled" && "white"};
    background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;



const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ flexDirection:"column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product  = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})}
`;

const ProductDetail  = styled.div`
    flex: 2;
    display: flex;
`;

const Details  = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
`;

const Image  = styled.img`
    width: 200px;
`;

const ProductName  = styled.span``;

const ProductId  = styled.span``;

const ProductColor  = styled.div`
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
`;

const ProductSize  = styled.span``;

const PriceDetail  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductAmount  = styled.div`
    margin: 0px 20px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    margin-top: 20px;
    font-size: 19px;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #d7d6d6;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;

function Cart() {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async() =>{
            try{
                const res = await userRequest.post("/checkout/payment",{
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                navigate("/success", {
                    stripeData: res.data,
                    products: cart, 
                    });
            } catch{}
        };
        stripeToken && makeRequest();
    },[stripeToken, cart,navigate]);
  return (
    <Container>
      <Announcement />
      <Navbar />
      
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
            <StripeCheckout
              name="SARA Shop"
              image="https://www.goulburn.nsw.gov.au/files/content/public/council/make-a-payment/payment.png?w=1200"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart