import React, {useRef}  from 'react'
import axios from 'axios';

export default function LiquidForm({liquids,currentUser, setLiquids}) {
    const type = useRef(null);
    const amount = useRef(0);

  const AddLiquid = e => {
    e.preventDefault();

    let newLiquid = {
      type: type.current.value,
      amount: amount.current.value,
      user: currentUser,
      id:liquids.length // just for testing
    }

    let allLiquids = [...liquids, newLiquid]
    
    setLiquids(allLiquids);

    // axios.post('/api/liquids/create', newLiquid)
    //     .then(res => console.log(res.data))
    //     .catch((error) => {console.log(error)});

    type.current.value = "";
    amount.current.value = 0;
  }

  
  return (
    <form className="liquid-form" onSubmit={AddLiquid}>
      <div className="form-inner" >
          <input className="liquid-input" type="text" name="type" id="type" placeholder="Type" ref={type} /> 
          <input className="liquid-input" type="number" name="amount" id="amount" placeholder="Amount" ref={amount}/>
          <input className="liquid-input" type="submit" value="Add Liquid" />
      </div>
    </form>
  )
}