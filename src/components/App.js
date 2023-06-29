import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
function App() {
  const[sushiList, setSushiList]=useState([])
  const[money, setMoney]=useState(100)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(res=>res.json())
    .then(data=>setSushiList(data))
  },[])

  // function handleCost(price){
  //   setCost(price)
  // }

  function handleMoney(price){
    if(money <=0){return alert("No More Money")}
    return setMoney(money-price)
  }
  console.log(money)

  return (
    <div className="app">
      <SushiContainer 
      sushiList={sushiList} 
      passMoney={handleMoney} 
      // passCost={handleCost}
      money={money}
      />
      <Table money={money}/>
    </div>
  );
}

export default App;
