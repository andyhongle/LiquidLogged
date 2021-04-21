import React, {useState, useEffect, useRef} from 'react'
import DailyAmount from './dailyAmount';
import LiquidForm from './liquidForm';
import LiquidList from "./liquidList";
import Cup from './cup';
import './liquid.css';
import axios from 'axios';


export default function Liquids() {
    const [liquids, setLiquids] = useState([]);
    const [dailyAmount, setDailyAmount] = useState(0);
    // let currentUser;
    // axios.get("/api/users/current").then(res => console.log(res));

    let currentUser = {
        id: "607f19114a8019c5a2507761",
        username: "lin"
    }

    // useEffect(() => {
    //     axios.get(`/api/liquids/user/${currentUser.id}`)
    //     .then(res => setLiquids(res.data))
    //     .catch((error) => {console.log(error)})
    // }, [])

    useEffect(() => {
        let temp = 0;
        for(let i = 0; i < liquids.length; i++) {
            temp += parseInt(liquids[i].amount);
        }
        setDailyAmount(temp);
    }, [liquids]);

    const goalAmount= useRef(2000);
    const [goal, setGoal] = useState(2000);

    const setGoalAmount = e => {
        e.preventDefault();
        setGoal(Number(goalAmount.current.value));
        goalAmount.current.value = 2000;
    }

    return (
        <div className="liquids">
            <DailyAmount dailyAmount={dailyAmount} goal={goal}/>
            <div className="main-section">
                <div className="left">
                    <LiquidForm liquids={liquids} setLiquids={setLiquids} currentUser={currentUser} />
                    <LiquidList liquids={liquids} setLiquids={setLiquids} />
                </div>
                <Cup dailyAmount={dailyAmount} goal={goal}/>
            </div>
            <br></br>
            <form className="liquid-form" onSubmit={setGoalAmount}>
                <div className="form-inner" >
                    <input className="liquid-input" type="number" name="goalAmount" id="goalAmount" placeholder="goalAmount" ref={goalAmount}/>
                    <input className="liquid-input" type="submit" value="Set Daily Goal" />
                </div>
            </form>
        </div>
    )
}


