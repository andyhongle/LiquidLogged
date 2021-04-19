import React from 'react'
import LiquidItem from './liquidItem'
import axios from 'axios';

export default function LiquidList({liquids, setLiquids}) {

    const removeLiquid = id => {
        let temp = liquids.filter(liquid => liquid.id !== id);
        setLiquids(temp);
        axios.delete('api/liquids/'+id)
            .then(res => console.log(res.data))
            .catch((error) => {console.log(error)});
    }



    const sortByDate = (a, b) => {
        return a.datetime - b.datetime;
    }

    return (
        <div className="liquid-list">
        liquid-list 
        {
            liquids.sort(sortByDate).map((liquid, index) => (
            <LiquidItem 
                key={index} 
                liquid={liquid} 
                removeLiquid={removeLiquid}
            />
            ))
        }
        </div>
    )
}
