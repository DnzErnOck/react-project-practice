import React from 'react'
import { useNavigate } from 'react-router-dom'
export const data =[
    {
       id:0,
       name:"React",
       description:"React Açıklama"
    },
    {
       id:1,
       name:"Vue",
       description:"Vue Açıklama"
    },
    {
       id:2,
       name:"Angular",
       description:"Angular Açıklama"
    }
]
export const Home = () => {
    const navigate =useNavigate();
   
  return (
    <div>
        {
            data.map((dt,i) => (
                <div onClick={() => navigate(`detail/${dt.id}`)} key={i} style={{cursor:"pointer",marginBottom:"30px"}}>
                    <div>{dt.name}</div>
                    <div>{dt.description}</div>
                </div>
            ))
        }
    </div>
  )
}
