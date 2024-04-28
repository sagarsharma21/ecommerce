import axios from "axios"; 
import { api, API_BASE_URL } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {

    const { colors, 
        sizes, 
        minPrice, 
        maxPrice, 
        minDiscount,
        category, 
        stock, 
        sort, 
        pageNumber, 
        pageSize } = reqData;

    try {
        dispatch({type: FIND_PRODUCTS_REQUEST});
        
            const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
            &minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}
            &pageNumber=${pageNumber}&pageSize=${pageSize}`);

                console.log("get product by category - ", data);

            dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data})

        } catch (error) {
            
            dispatch({type: FIND_PRODUCTS_FAILURE, payload: error.message})
    }
};

//find product by id 
export const findProductsById = (reqData) => async (dispatch) => {

    const { productId } = reqData; 
        console.log("product id - ", productId);
    try {
            dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})

            const {data} = await api.get(`/api/products/id/${reqData}`);

                console.log("products by id - ", data);

            dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})

        } catch (error) {
            
            dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message});
    }
};

//create product    
export const createProduct = (product) => async (dispatch) => {

    try {
            dispatch({type: CREATE_PRODUCT_REQUEST})

            const {data} = await api.post(`/api/admin/products/`, product); //api.post(`${API_BASE_URL}/api/admin/products` ,product.data);

                console.log("create product - ", data);
            
            dispatch({type: CREATE_PRODUCT_SUCCESS, payload: data})

    } catch (error) {
            
        dispatch({type: CREATE_PRODUCT_FAILURE, payload: error.message})
    }
};

//delete product
export const deleteProduct = (productId) => async (dispatch) => {

    try {   
            dispatch({type: DELETE_PRODUCT_REQUEST})

            const {data} = await axios.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);

                console.log("delete product - ", data);
            
            dispatch({type: DELETE_PRODUCT_SUCCESS, payload: productId})

    } catch (error) {
        dispatch({type: DELETE_PRODUCT_FAILURE, payload: error.message})
    }
};
