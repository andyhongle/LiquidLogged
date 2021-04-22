import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ProfileDonut from './profile_donut';
import ProfileTimeSeries from './profile_time_series';
import './profile.css';

export default function Profile() {

//   const currentUserId = useRef("");
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
    axios.get(`api/users/current`)
      .then((res) => {
        axios.get(`/api/liquids/user/${res.data.id}`)
          .then((res) => {
              allLiquids.current = res.data;
              allLiquids.current.forEach(
                (liquid, i) =>{
                    allLiquids.current[i].datetime = new Date(liquid.datetime.slice(0,4), liquid.datetime.slice(5,7)-1, liquid.datetime.slice(8,10));
                }
              );
              allLiquids.current = allLiquids.current.sort((a,b) => a.datetime.getTime() > b.datetime.getTime() ? 1 : -1);
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
            })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [])

  function handleDateChange(type) {
      return (e) => {
        if (type === "start"){
            setStartDate(e.target.value);
            const newDate = e.target.value;
            setFilter(
                allLiquids.current.filter((liquid) => {
                let date = liquid.datetime;
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

  return (
    <div className="profile-data-container">
      <div className="profile-header-container">
        <h2 className="profile-header">Your Liquids</h2>
        <div className="profile-dates">
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
              max={currentDate}
            />
          </label>
        </div>
      </div>

      <div className="profile-graphs">
        <ProfileDonut filteredLiquids={filteredLiquids} />
        <ProfileTimeSeries filteredLiquids={filteredLiquids} />
      </div>
    </div>
  );
}

