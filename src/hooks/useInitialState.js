import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import initialState, {productsLocal} from "../initialState";
import { shoppingReducer } from "./useReduceCartProducts";

const API = 'https://backend-fakemadridstore-production.up.railway.app/api/products?populate=image'

const useInitialState = () => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);
  const [products, setProducts] = useState([])
  const [local, setLocal] = useState(false)

  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await axios.get(API);
        setProducts(response.data.data)
        setLocal(false)
      } catch (error) {
        setProducts(productsLocal);
        setLocal(true)
        console.log(error)
      }
    }
    fetchData()
  },[])

  return {
    state,
    dispatch,
    products,
    local
  }
}

export default useInitialState;