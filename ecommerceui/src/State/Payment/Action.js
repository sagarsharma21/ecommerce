import { api , API_BASE_URL } from "../../config/apiConfig"; import axios from 'axios';
import { CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE } from "./ActionType"

    
  export const createPayment = (orderId) => async (dispatch) => {
    console.log("create payment orderId - ", orderId);

    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        // const config = {
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Authorization":`Bearer ${jwt}`
        //     }
        // }
        //POST method ,so send body too
        const { data } = await api.post(`/api/payments/${orderId}`, {} );

        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }
        //dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
}


export const updatePayment = (reqData) => async (dispatch) => {

    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        console.log("update payment - ", data);
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
}; 

