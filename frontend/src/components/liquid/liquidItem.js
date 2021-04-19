import React,{useState} from 'react';

function LiquidItem({liquid, removeLiquid}) {


  return (
    <div className="liquid-item">
      <button className="remove-liquid" onClick={() => removeLiquid(liquid.id)}>Delete</button>
      <div className="type">{liquid.type}</div>
      <div className="amount">{liquid.amount}ml</div>
    </div>
  )
}

export default LiquidItem;