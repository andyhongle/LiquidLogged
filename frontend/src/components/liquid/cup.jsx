import React from 'react'

export default function Cup({dailyAmount}) {
    let message = 
        dailyAmount < 500 ? "Come on! Water is the source of life" :  
                            (dailyAmount < 1000 ? "Awesome! Almost Halfway!" : 
                            (dailyAmount < 1500 ? "Excellent! Get more!" : 
                            (dailyAmount < 2000 ? "Almost! Amost!" : 
                            (dailyAmount === 2000 ? "Achieved!!!" : "Ohh~ That's too much!"))) )
    return (
        <div className="cup-section">
        <div className="message">{message}</div>
            <div className="cup">
                 <div style={{height: dailyAmount / 2000 * 300}} className="level"></div>
                 <div className="straw"></div>
                 <div className="straw-head"> </div>
            </div>
        </div>
    )
}
