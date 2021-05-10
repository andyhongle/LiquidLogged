import React from 'react';

function LiquidItem({liquid, removeLiquid}) {

  return (
    <tr className="liquid-item">
      <td className="remove-liquid" onClick={() => removeLiquid(liquid._id)}>&times;</td>
      <td className="type">{liquid.type}</td>
      <td className="amount">{liquid.amount}ml</td>
    </tr>
  )
}

export default LiquidItem;

