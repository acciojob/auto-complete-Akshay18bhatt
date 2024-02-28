
import React, { useState } from "react";
import './../styles/App.css';



const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
const App = () => {


  
  const [fruitArr, setFruitArr]= useState(fruits);

    function filterFruits(e){
      let filteredArr= fruits.filter(fruit=>fruit.includes(e.target.value));
      setFruitArr(filteredArr)
    }

  
  return (

    
    <div id="main">
        
        <div>
          <h1>Search item</h1>
          <input onChange={filterFruits} placeholder="search fruit"></input>
          <ul>
            {fruitArr.map(fruit=>{
              return(<li key={fruit} >{fruit}</li>)
            })}
          </ul>
        </div>
    </div>
  )
}

export default App
