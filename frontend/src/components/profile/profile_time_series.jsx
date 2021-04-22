import React from "react";
import { Line } from "react-chartjs-2";

const ProfileTimeSeries = ({filteredLiquids}) => {

    const liquids = {};
    if (filteredLiquids[0]) {
      filteredLiquids.forEach((liquid) => {
        const liquidDate = '';
        if (!Object.keys(liquids).includes(liquidDate))
          liquids[liquidDate] = liquid.amount;
        else liquids[liquidDate] += liquid.amount;
      });
    }   
    const data = {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "Liquids Logged",
          data: [12, 60, 3, 5, 2, 3],
          fill: true,
          backgroundColor: "rgb(105, 255, 255)",
          borderColor: "rgba(105, 255, 255, 0.2)",
        },
      ],
    };

    const options = {
      scales: {
        y: {
          // ticks: {
          //   beginAtZero: true,
          // },
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
            text: "Dates Tracked",
            color: "black",
          },
        },
      },
    };
    return (
      <div className="time-series-container">
        <div className="time-series-header">
          <h2 className="title">Your Liquid Intake Over Time</h2>
        </div>
        <Line data={data} options={options} />
      </div>
    );
 
};

export default ProfileTimeSeries;
