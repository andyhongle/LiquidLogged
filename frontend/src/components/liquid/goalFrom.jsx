import React, {useRef}  from 'react'

export default function GoalForm() {
  const goalAmount = useRef(2000);

  const SetGoal = e => {
    e.preventDefault();
    goalAmount = goalAmount.current.value;
    goalAmount.current.value = 0;
  }

  
  return (
    <form className="goal-form" onSubmit={SetGoal}>
      <div className="form-inner" >
          <input className="liquid-input" type="number" name="goalAmount" id="goalAmount" placeholder="Goal Amount (default 2000ml)" ref={goalAmount}/>
          <input className="liquid-input" type="submit" value="Set Daily Goal" />
      </div>
    </form>
  )
}