import React from 'react'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver';

export default function Cup({dailyAmount, goal}) {
    let message = 
        dailyAmount < goal / 4 ? "Come on! Water is the source of life" :  
                            (dailyAmount < goal / 2 ? "Awesome! Almost Halfway!" : 
                            (dailyAmount < goal / 4 * 3 ? "Excellent! Get more!" : 
                            (dailyAmount < goal ? "Almost! Amost!" : 
                            (dailyAmount === goal ? "Achieved!!!" : "Ohh~ That's too much!"))) )
    return (
        
        <div className="cup-section">
        <div className="message">{message}</div>
            <div className="cup">
                 <div style={{height: dailyAmount / goal * 300}} className="level"></div>
                 <div className="straw"></div>
                 <div className="straw-head"> </div>
            </div>
        </div>
    )
}