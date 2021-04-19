import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export default function Profile() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const currentUserId = useRef('');
  const allLiquids = useRef([]);
  useEffect(() => {
    axios.get(`api/users/current`)
      .then((res) => currentUserId.current = res.id)
      .catch((err) => console.log(err));
    setEndDate(currentDate);
  }, [])

  useEffect(() => {
    axios.get(`/api/liquids/user/${currentUserId.current}`)
      .then((res) => allLiquids.current = res)
      .catch((err) => console.log(err));
    let filteredLiquids = allLiquids;
  }, [currentUserId])

  let currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  currentDate = year + '-' + month + '-' + day;
  // setEndDate(currentDate);

  let earliestDate;

  return (
    <div>
      Profile
      <label> From
        <input type="date" onChange={(e) => setStartDate(e.target.value)} value={earliestDate} min={earliestDate}/>
      </label>
      <label> To
        <input type="date" onChange={(e) => setEndDate(e.target.value)} value={currentDate} max={currentDate}/>
      </label>
    </div>
  );
}

