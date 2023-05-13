import { publicRequest } from "../requestMethods";
import {loginFailure, loginStart, loginSuccess} from "./userRedux";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from "./productRedux";

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
  };

  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        //do not want to delete products right now
        //const res = await userRequest.get(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
  };