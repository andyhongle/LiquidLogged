import React from "react";
import { Line } from "react-chartjs-2";

const ProfileTimeSeries = ({filteredLiquids}) => {

    let liquidTypes = {};
    if (filteredLiquids[0]) {
      filteredLiquids.forEach((liquid) => {
        const liquidType =
          liquid.type[0].toUpperCase() + liquid.type.slice(1).toLowerCase();
        if (!Object.keys(liquidTypes).includes(liquidType))
          liquidTypes[liquidType] = liquid.amount;
        else liquidTypes[liquidType] += liquid.amount;
      });
    }
    let liquidsArr = Object.entries(liquidTypes).sort((a, b) =>
      a[1] < b[1] ? 1 : -1
    );

    const numTypes = liquidsArr.length;
    if (numTypes > 6) {
      const otherTypes = liquidsArr.slice(6);
      liquidsArr = liquidsArr.slice(0, 6);
      const mergeOthers = ["Other", 0];
      otherTypes.forEach((liquid) => (mergeOthers[1] += liquid[1]));
      liquidsArr.push(mergeOthers);
    }

    liquidTypes = liquidsArr.map((liquid) => liquid[0]);


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
    const liquidDates = datesArr.map(date => date[0]);
    const liquidAmounts = datesArr.map(date => date[1]);

    const separateLiquids = {};
    liquidTypes.forEach(liquid => {
      separateLiquids[liquid] = {};
      liquidDates.forEach(date => separateLiquids[liquid][date] = 0);
    })
    
    if (filteredLiquids[0]) {
      filteredLiquids.forEach((liquid) => {
        const startDay = String(liquid.datetime.getDate()).padStart(2, "0");
        const startMonth = String((liquid.datetime.getMonth() + 1)).padStart(2, "0");
        const startYear = liquid.datetime.getFullYear();
        const liquidDate = startMonth + "-" + startDay + "-" + startYear;
        const liquidType = liquid.type[0].toUpperCase() + liquid.type.slice(1).toLowerCase();
        if (!Object.keys(separateLiquids).includes(liquidType))
          separateLiquids["Other"][liquidDate] += liquid.amount;
        else separateLiquids[liquidType][liquidDate] += liquid.amount;
      });
    }   

    const set = [
      {
        label: "Total Liquids",
        data: liquidAmounts,
        fill: false,
        backgroundColor: "rgb(105, 255, 255, 1)",
        borderColor: "rgba(105, 255, 255, 1)",
      }
    ];
    let colorCount = 0;
    const colors = [
      "rgba(56,108,176, 1)",
      "rgba(255, 99, 132, 1)",
      "rgba(190,174,212, 1)",
      "rgba(253,192,134, 1)",
      "rgba(127,201,127, 1)",
      "rgba(191,91,23, 1)",
      "rgba(102,102,102, 1)",
    ];
    Object.keys(separateLiquids).forEach(type => {
      const typeAmount = Object.values(separateLiquids[type]);
      set.push({
        label: type,
        data: typeAmount,
        fill: false,
        backgroundColor: colors[colorCount],
        borderColor: colors[colorCount],
      });
      colorCount++;
    })

    const data = {
      labels: liquidDates,
      datasets: set,
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
          <h2 className="time-series-title">Liquid Intake Over Time (ml)</h2>
        </div>
        <Line classname="line-graph" data={data} options={options} />
      </div>
    );
 
};

export default ProfileTimeSeries;
