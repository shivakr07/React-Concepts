import "./styles.css";
import React from 'react';
import Child from './Child'
export default function App() {
  function getData(data){
    console.log(data);
  }
  return (
    <>
      <Child getData = {getData}/>
    </>
  );
}

