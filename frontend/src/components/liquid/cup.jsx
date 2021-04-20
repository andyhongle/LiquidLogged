import React from 'react'

export default function Cup({dailyAmount}) {
    
    return (
        <div className="cup-section">
            <div className="cup">
                 <div style={{height: dailyAmount/2000*300}} className="level"></div>
            </div>
        </div>
    )
}
