import React from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined, SearchOutlined,FavoriteBorderOutlined  } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    height: 350px;
    min-width: 280px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`


const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    cursor: pointer;
    z-index: 3;
    &:hover{
        opacity: 1;
    }
`

const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

function Product({item}) {
  return (
    <Container>
        
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined  />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined  />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product;