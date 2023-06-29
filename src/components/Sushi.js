import React, {useState} from "react";

function Sushi({sushi, onMoney, onCost, money}) {
  const [aten, setAten]=useState(false)
  const {name, img_url, price}= sushi

  function handleAten(){
    if(aten ===false){
      if(money>=price){
        setAten(true)
        onMoney(price)
      }else if(money<price){
        alert("No Free Meals!")
      }
    }
    if(aten===true ){return false}
    
  }
  

  return (
    <div className="sushi">
      <div className="plate" onClick={handleAten}>
        {/* Tell me if this sushi has been eaten! */}
        {aten ? null : (
          <img
            src={img_url}
            alt={name+"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
