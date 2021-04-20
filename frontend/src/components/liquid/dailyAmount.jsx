import React from 'react'

export default function DailyAmount({dailyAmount}) {
    return (
        <div className="daily-amount-section">
            <h1 className="daily-amount-title">Daily Tracker</h1>
            <h1 className="daily-amount">{dailyAmount}ml</h1>
        </div>
    )
}
