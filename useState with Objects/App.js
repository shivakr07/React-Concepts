import { useState } from "react";
import React from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
    });
    function update(e){
        e.preventDefault();   
        setCar({...car, model : "Fiesta"}) 
        // spread operator
    }
    return (
        <>
        <h1>It is a {car.model} of {car.brand}</h1>
        <button onClick={update}>Update</button>
        </>
    )
}
export default Car;

