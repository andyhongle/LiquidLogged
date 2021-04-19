import React, {userState, useEffect} from 'react'
import DailyAmount from './dailyAmount';
import LiquidForm from './liquidForm';
import LiquidList from "./liquidList";

export default function Liquids() {
    const [liquids, setLiquids] = userState([]);
    const [dailyAmount, setDailyAmount] = useState(0);

    useEffect(() => {
        let temp = 0;
        for(let i = 0; i < liquids.length; i++) {
            temp += parseInt(liquids[i].amount);
        }
        setLiquids(temp);
    }, [liquids]);


    return (
        <div className="liquids">
            <DailyAmount dailyAmount={dailyAmount} />
			<LiquidForm liquids={liquids} setLiquids={setLiquids} />
			<LiquidList liquids={liquids} setLiquids={setLiquids} />
        </div>
    )
}
