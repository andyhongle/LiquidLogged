import React from 'react'

export default function DailyAmount({dailyAmount}) {
    return (
        <div className="daily-amount-section">
            <h1>Liquids Tracker</h1>
            <div className="daily-amount">{dailyAmount}ml</div>
        </div>
    )
}
