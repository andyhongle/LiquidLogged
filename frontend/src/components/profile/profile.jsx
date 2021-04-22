import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ProfileDonut from './profile_donut';
import ProfileTimeSeries from './profile_time_series';
import './profile.css';

export default function Profile() {

  const currentUserId = useRef("");
  const allLiquids = useRef([]);
 
  let currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  currentDate = year + "-" + month + "-" + day;

  const latestDate = useRef(new Date());
  const earliestDate = useRef(currentDate);
  const [startDate, setStartDate] = useState(currentDate);
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
  }, [])
  
  useEffect(() => {
    allLiquids.current = [
      {user: 123532432, type: "water", amount: 300, datetime: new Date(2021,3,18)},
      {user: 535953328, type: "water", amount: 100, datetime: new Date(2021,2,19)},
      {user: 494837383, type: "milk", amount: 1000, datetime: new Date(2021,2,19)},
      {user: 838437429, type: "beer", amount: 500, datetime: new Date(2021,1,28)},
      {user: 484737329, type: "yogurt", amount: 400, datetime: new Date(2021,1,18)}, 
      {user: 945837839, type: "beer", amount: 1000, datetime: new Date(2021,3,1)},
      {user: 843847393, type: "energy", amount: 500, datetime: new Date(2021,2,18)},
      {user: 843847393, type: "juice", amount: 500, datetime: new Date(2021,2,18)}

    ].sort((a,b) => a.datetime.getTime() > b.datetime.getTime() ? 1 : -1);
    // console.log(allLiquids.current);
    // allLiquids.current.forEach((liquid) => {
    //     const earliestDateArr = earliestDate.split("-");
    //     const dateObject = new Date(parseInt(earliestDateArr[0]), parseInt(earliestDateArr[1])-1, parseInt(earliestDateArr[2]));

        // const startDay = String(liquid.datetime.getDate()).padStart(2, "0");
        // const startMonth = String(liquid.datetime.getMonth() + 1).padStart(2, "0");
        // const startYear = liquid.datetime.getFullYear();
    //     if (liquid.datetime.getTime() < dateObject.getTime()) {
    //         console.log(dateObject);
    //         setEarliestDate(startYear + "-" + startMonth + "-" + startDay);
    //         setStartDate(startYear + "-" + startMonth + "-" + startDay);
    //     } else setEarliestDate(earliestDateArr[0] + "-" + earliestDateArr[1] + "-" + earliestDateArr[2]);
    // });
    setFilter(allLiquids.current);

    const startDay = String(allLiquids.current[0].datetime.getDate()).padStart(2, "0");
    const startMonth = String(allLiquids.current[0].datetime.getMonth() + 1).padStart(2, "0");
    const startYear = allLiquids.current[0].datetime.getFullYear();
    const initialStartDate = startYear + "-" + startMonth + "-" + startDay;

    const endDay = String(allLiquids.current[allLiquids.current.length-1].datetime.getDate()).padStart(2, "0");
    const endMonth = String(allLiquids.current[allLiquids.current.length-1].datetime.getMonth() + 1).padStart(2, "0");
    const endYear = allLiquids.current[allLiquids.current.length-1].datetime.getFullYear();
    const initialEndDate = endYear + "-" + endMonth + "-" + endDay;

    earliestDate.current = initialStartDate;
    latestDate.current = initialEndDate;
    setStartDate(initialStartDate);
    setEndDate(initialEndDate);
  }, [])

  function handleDateChange(type) {
      return (e) => {
        if (type === "start"){
            setStartDate(e.target.value);
            const newDate = e.target.value;
            setFilter(
                allLiquids.current.filter((liquid) => {
                let date = liquid.datetime;
                // const liquidDate = date.getDate();
                // const liquidMonth = date.getMonth() + 1;
                // const liquidYear = date.getFullYear();
                const startDateArr= newDate.split("-");
                const endDateArr = endDate.split("-");
                const startDateTime = new Date(parseInt(startDateArr[0]), parseInt(startDateArr[1])-1, parseInt(startDateArr[2])).getTime();
                const endDateTime = new Date(parseInt(endDateArr[0]), parseInt(endDateArr[1])-1, parseInt(endDateArr[2])).getTime();
                return date.getTime() >= startDateTime && date.getTime() <= endDateTime;
                })
            );
        } else {
            setEndDate(e.target.value);
            const newDate = e.target.value;
            setFilter(
                allLiquids.current.filter((liquid) => {
                let date = liquid.datetime;
                // const liquidDate = date.getDate();
                // const liquidMonth = date.getMonth() + 1;
                // const liquidYear = date.getFullYear();
                const startDateArr= startDate.split("-");
                const endDateArr = newDate.split("-");
                const startDateTime = new Date(parseInt(startDateArr[0]), parseInt(startDateArr[1])-1, parseInt(startDateArr[2])).getTime();
                const endDateTime = new Date(parseInt(endDateArr[0]), parseInt(endDateArr[1])-1, parseInt(endDateArr[2])).getTime();
                return date.getTime() >= startDateTime && date.getTime() <= endDateTime;
                })
            );
        }
      }
  }

  
  
//   console.log(latestDate.current);

  return (
    <div>
      <h2 className="profile-header">Liquid Profile</h2>

      <label className="profile-from">
        From
        <input
          type="date"
          onChange={handleDateChange("start")}
          value={startDate}
          min={earliestDate.current}
          max={endDate}
        />
      </label>
      
      <label className="profile-to">
        To
        <input
          type="date"
          onChange={handleDateChange("end")}
          value={endDate}
          min={startDate}
          max={latestDate.current}
        />
      </label>
      <div className="profile-graphs">
        <ProfileDonut filteredLiquids={filteredLiquids}/>
        <ProfileTimeSeries filteredLiquids={filteredLiquids} />
      </div>
    </div>
  );
}

