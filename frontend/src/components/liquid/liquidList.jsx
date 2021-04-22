import React from 'react'
import LiquidItem from './liquidItem'
import axios from 'axios';


export default function LiquidList({liquids, setLiquids}) {


    const removeLiquid = id => {

        axios.delete(`/api/liquids/${id}`)
            .then(res => {
                console.log(res.data);
                let liquidToBeDeleted = res.data;
                let temp = liquids.filter(liquid => liquid._id !== liquidToBeDeleted._id);
                setLiquids(temp);
            })
            .catch((error) => console.log(error.response.data));
    }


    return (
        <div className="liquid-list">
        <table>
            <tbody>
                {
                    liquids.map((liquid, index) => (
                    <LiquidItem 
                        key={index} 
                        liquid={liquid} 
                        removeLiquid={removeLiquid}
                    />
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}