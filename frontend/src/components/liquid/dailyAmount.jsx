import React from 'react'

export default function DailyAmount({dailyAmount, goal}) {


    let message = 
        dailyAmount < goal / 4 ? "Water you doing. Drink More!" :  
                            (dailyAmount < goal / 2 ? "Awesome! The glass is half full" : 
                            (dailyAmount < goal / 4 * 3 ? "Excellent! Drink more!" : 
                            (dailyAmount < goal ? "Almost! Almost!" : 
                            (dailyAmount === goal ? "Goal Achieved!!! Good Job!" : "California is in a drought. Save some for the fishes!"))) )

    return (
        <div className="daily-amount-section">
            <h1 className="daily-amount-title">Daily Amount</h1>
            <div className="right-section">
                <h1 className="daily-amount">{dailyAmount}/{goal}</h1>
                <h4 className="message">{message}</h4>
            </div>
            
        </div>
    )
}