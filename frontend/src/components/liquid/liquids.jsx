import React, {useState, useEffect} from 'react'
import DailyAmount from './dailyAmount';
import LiquidForm from './liquidForm';
import LiquidList from "./liquidList";
import Cup from './cup';
import axios from 'axios';


export default function Liquids() {
    const [liquids, setLiquids] = useState([]);
    const [dailyAmount, setDailyAmount] = useState(0);
    let currentUser = axios.get("/api/users/current");
    
    useEffect(() => {
        axios.get(`/api/liquids/user/${currentUser.id}`)
        .then(res => setLiquids(res.data))
        .catch((error) => {console.log(error)})
    }, [])

    useEffect(() => {
        let temp = 0;
        for(let i = 0; i < liquids.length; i++) {
            temp += parseInt(liquids[i].amount);
        }
        setDailyAmount(temp);
    }, [liquids]);

    return (
        <div className="liquids">
            <DailyAmount dailyAmount={dailyAmount} />
			<LiquidForm liquids={liquids} setLiquids={setLiquids} currentUser={currentUser} />
			<LiquidList liquids={liquids} setLiquids={setLiquids} />
            <Cup dailyAmount={dailyAmount}/>
        </div>
    )
}
