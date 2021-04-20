import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export default function Profile() {

  const currentUserId = useRef("");
  const allLiquids = useRef();

  let currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  currentDate = year + "-" + month + "-" + day;

  let earliestDate;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(currentDate);
  const [filteredLiquids, setFilter] = useState([]);

  useEffect(() => {
    // axios.get(`api/users/current`)
    //   .then((res) => {
    //     axios.get(`/api/liquids/user/${res.id}`)
    //       .then((res) => allLiquids.current = res)
    //       .catch((err) => console.log(err))
    //   })
    //   .catch((err) => console.log(err));
    currentUserId.current = 2;
    setEndDate(currentDate);
  }, [])
  
  useEffect(() => {
    allLiquids.current = [
      {user: 123532432, type: "water", amount: 300, datetime: new Date(2021,3,18)},
      {user: 535953328, type: "water", amount: 100, datetime: new Date(2021,2,19)},
      {user: 494837383, type: "milk", amount: 1000, datetime: new Date(2021,2,19)},
      {user: 838437429, type: "beer", amount: 500, datetime: new Date(2021,1,28)},
      {user: 484737329, type: "yogurt", amount: 400, datetime: new Date(2021,1,18)}, 
      {user: 945837839, type: "beer", amount: 1000, datetime: new Date(2021,3,1)},
      {user: 843847393, type: "energy", amount: 500, datetime: new Date(2021,2,18)}

    ];
    setFilter(allLiquids.current);
    console.log(filteredLiquids);
  }, [])

  function handleStartDate(e){
    setStartDate(e.target.value);
    setFilter(
      allLiquids.current.filter((liquid) => {
        let date = liquid.datetime;
        const liquidDate = date.getDate();
        const liquidMonth = date.getMonth() + 1;
        const liquidYear = date.getFullYear();
        
        if (date.getTime() > startDate && date.getTime() < endDate) return liquid;
      })
    );
  }
  
  console.log(allLiquids.current);
  console.log(endDate);
  return (
    <div>
      Profile
      <label> From
        <input type="date" onChange={(e) => setStartDate(e.target.value)} value={earliestDate} min={earliestDate}/>
      </label>
      <label> To
        <input type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} max={currentDate}/>
      </label>
    </div>
  );
}

