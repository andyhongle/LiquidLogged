import React from "react";
import { Line } from "react-chartjs-2";

const ProfileTimeSeries = ({filteredLiquids}) => {

    const liquids = {};
    if (filteredLiquids[0]) {
      filteredLiquids.forEach((liquid) => {
        const startDay = String(liquid.datetime.getDate()).padStart(2, "0");
        const startMonth = String((liquid.datetime.getMonth() + 1)).padStart(2, "0");
        const startYear = liquid.datetime.getFullYear();
        const liquidDate = startMonth + "-" + startDay + "-" + startYear;
        if (!Object.keys(liquids).includes(liquidDate))
          liquids[liquidDate] = liquid.amount;
        else liquids[liquidDate] += liquid.amount;
      });
    }   
    
    const datesArr = Object.entries(liquids);
    // console.log(datesArr);
    const liquidDates = datesArr.map(date => date[0]);
    const liquidAmounts = datesArr.map(date => date[1]);
    const data = {
      labels: liquidDates,
      datasets: [
        {
          label: "Liquids Logged",
          data: liquidAmounts,
          fill: true,
          backgroundColor: "rgb(105, 255, 255)",
          borderColor: "rgba(105, 255, 255, 0.2)",
        },
      ],
    };

    const options = {
      maintainAspectRatio: true,
      scales: {
        y: {
          min: 0,
          title: {
            display: true,
            text: "Daily Liquid Intake",
            color: "black",
          },
        },
        x: {
          // ticks: {
          //   beginAtZero: true,
          // },
          title: {
            display: true,
            text: "Days Tracked",
            color: "black",
          },
        },
      },
    };
    return (
      <div className="time-series-container">
        <div className="time-series-header">
          <h2 className="time-series-title">Liquid Intake Over Time</h2>
        </div>
        <Line classname="line-graph" data={data} options={options} />
      </div>
    );
 
};

export default ProfileTimeSeries;
