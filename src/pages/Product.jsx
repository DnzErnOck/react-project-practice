import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from '../components/ProductCard/ProductCard';

export const Product = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        axiosGet();
      
    }, [])
    

    const axiosGet = async () =>{
        let response =await axios.get("https://dummyjson.com/products");
        setproducts(response.data.products);
    }
  return (
    <div classNameName='container' mt-5>
        <div classNameName='row'>
            {products.map(product =>(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
    </div>
  )
}
