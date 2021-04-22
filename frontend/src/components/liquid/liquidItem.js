import React from 'react';

function LiquidItem({liquid, removeLiquid}) {

  return (
    <tr className="liquid-item">
      <button className="remove-liquid" onClick={() => removeLiquid(liquid.id)}>&times;</button>
      <td className="type">{liquid.type}</td>
      <td className="amount">{liquid.amount}ml</td>
    </tr>
  )
}

export default LiquidItem;

    // <div className="liquid-item">
    //   <button className="remove-liquid" onClick={() => removeLiquid(liquid.id)}>&times;</button>
    //   <div className="type">{liquid.type}</div>
    //   <div className="amount">{liquid.amount}ml</div>
    // </div>
