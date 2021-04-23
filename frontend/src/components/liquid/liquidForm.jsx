import React, {useState, useRef}  from 'react'
import axios from 'axios';

export default function LiquidForm({liquids,currentUser, setLiquids}) {
    const type = useRef(null);
    const amount = useRef(0);
    const [errors, setErrors] = useState([]);

  const AddLiquid = e => {
    e.preventDefault();

    let newLiquid = {
      type: type.current.value,
      amount: amount.current.value,
      user: currentUser,
    }

    axios.post('/api/liquids/create', newLiquid)
        .then(res => {
          console.log(res);
          axios.get(`/api/liquids/user/${currentUser.id}/current_date`)
          .then(res => {
            setLiquids(res.data);
            setErrors([]);
          })
        }) 
        .catch(errors => {
          // console.dir returns an object 
          console.log(errors.response.data.text);
          setErrors(errors.response.data.text)
        });

    type.current.value = "";
    amount.current.value = "";
  }

  
  return (
    <div>
      <form className="liquid-form" onSubmit={AddLiquid}>
        <div className="form-inner" >
            <input className="liquid-input" type="text" name="type" id="type" placeholder="Type" ref={type} /> 
            <input className="liquid-input" type="number" min="1" max="2000" name="amount" id="amount" placeholder="Amount (ml)" ref={amount}/>
            <input className="liquid-input" type="submit" value="Add Liquid" />
        </div>
      </form>
      <div className="error-section">
        {errors}
      </div>
    </div>
  )
}
