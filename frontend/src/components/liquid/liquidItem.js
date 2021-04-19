import React from 'react';

function LiquidItem({liquid, removeLiquid}) {

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeLiquid(liquid.id)}>x</button>
      <div className="type">{liquid.type}</div>
      <div className="amount">{liquid.amount}ml</div>
    </div>
  )
}

export default LiquidItem;