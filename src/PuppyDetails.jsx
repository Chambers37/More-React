import { useState, useEffect } from "react";


const PuppyDetails = ({ puppyDetails : { name, status, imageUrl }, setPuppyDetails }) => {
 
  return (
    <>
      {
        <section>

        <h1>{name}</h1> 
        <p>{status}</p>
        <img src={imageUrl} height="250px"></img>
        <button onClick={() => {
          setPuppyDetails({})
        }}>Return</button>
        </section>
      }
    </>
  )

}

export default PuppyDetails