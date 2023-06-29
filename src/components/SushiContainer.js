import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiList, passMoney, passCost, money}) {
  const[counter1, setCounter1]=useState(0)
  const[counter2, setCounter2]=useState(4)

  const displaySushi = sushiList.slice(counter1, counter2).map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} onMoney={passMoney} onCost={passCost} money={money} />
  })

  function handleCounters() {
    setCounter1(counter1 + 5)
    setCounter2(counter2 + 5)
  }

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton changeCounters={handleCounters}/>
    </div>
  );
}

export default SushiContainer;
