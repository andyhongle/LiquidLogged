import React from 'react';
import { Doughnut } from "react-chartjs-2";

const ProfileDonut = ({filteredLiquids}) => {
    console.log(filteredLiquids);
    const liquids = {};
    if (filteredLiquids[0]){
        filteredLiquids.forEach((liquid) => {
            const liquidType = liquid.type[0].toUpperCase() + liquid.type.slice(1).toLowerCase();
            if (!Object.keys(liquids).includes(liquidType)) liquids[liquidType] = liquid.amount;
            else liquids[liquidType] += liquid.amount;
        });
    }   
    let liquidsArr = Object.entries(liquids).sort((a,b) => a[1] < b[1] ? 1 : -1);
    
    const numTypes = liquidsArr.length;
    if (numTypes > 6) {
        const otherTypes = liquidsArr.slice(6);
        liquidsArr = liquidsArr.slice(0,6);
        const mergeOthers = ["Other", 0];
        otherTypes.forEach(liquid => mergeOthers[1] += liquid[1]);
        liquidsArr.push(mergeOthers);
    }
    const liquidLabels = liquidsArr.map((liquid) => liquid[0]);
    const liquidAmounts = liquidsArr.map(liquid => liquid[1]);
    const data = {
      labels: liquidLabels,
      datasets: [
        {
          label: "Distribution of Liquids",
          data: liquidAmounts,
          backgroundColor: [
            "rgba(56,108,176, 0.3)",
            "rgba(255, 99, 132, 0.3)",
            "rgba(190,174,212, 0.3)",
            "rgba(253,192,134, 0.3)",
            "rgba(127,201,127, 0.3)",
            "rgba(191,91,23, 0.3)",
            "rgba(102,102,102, 0.3)",
          ],
          borderColor: [
            "rgba(56,108,176, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(190,174,212, 1)",
            "rgba(253,192,134, 1)",
            "rgba(127,201,127, 1)",
            "rgba(191,91,23, 1)",
            "rgba(102,102,102, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className="donut-container">
        <div className="donut-header">
          <h2 className="donut-title">Distribution of Liquid Types (ml)</h2>
        </div>
        <Doughnut data={data} />
      </div>
    );
  
};


export default ProfileDonut;