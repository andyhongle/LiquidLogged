import React from 'react'

export default function DailyAmount({dailyAmount, goal}) {
    return (
        <div className="daily-amount-section">
            <h1 className="daily-amount-title">Daily Amount</h1>
                <h1 className="daily-amount">{dailyAmount}/{goal}</h1>
        </div>
    )
}
