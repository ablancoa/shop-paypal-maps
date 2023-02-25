import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import initialState from "../initialState";
import { shoppingReducer } from "./useReduceCartProducts";

const API = 'https://backend-fakemadridstore-production.up.railway.app/api/products?populate=image'

const useInitialState = () => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await axios.get(API);
        setProducts(response.data.data)
      } catch (error) {
        throw error
      }
    }
    fetchData()
  })

  return {
    state,
    dispatch,
    products
  }
}

export default useInitialState;