import React from 'react'
import domtoimage from "dom-to-image";
import { saveAs } from 'file-saver';
// import axios from "axios";

export default function Cup({dailyAmount, goal}) {


    const handleShare = () => {
        let node = document.getElementById("test");
        domtoimage.toBlob(node, {quality: "1", height:'460', width:'350'}).then((blob) => {
            saveAs(blob, 'mycup.png')
        })

        // domtoimage
        // .toPng(node)
        // .then(dataUrl => {
        //     axios
        //     .post(
        //         "/api/server/imagetotweet",
        //         {dataUrl: dataUrl}
        //     )
        //     .then(res => {
        //         const url = "https://twitter.com/LinYuan731";
        //         const via = "Lin";
        //         const title = res.data.message;
        //         const hashtags = "test liquid tracker";
        //         const twitterURL = 
        //         `https://twitter.com/shareurl=${url}&text=${title}&via=${via}
        //         &hashtags=${hashtags}`;
        //         openTwitterUrl(twitterURL);
        //     })
        //     .catch(err => console.log(err, "Error trying to tweet"))
        // })
        // .catch(err => console.log(err));
  };

    //  function openTwitterUrl(twitterUrl) {
    //     const width = 575;
    //     const height = 400;
    //     const left = (window.outerWidth - width) / 2;
    //     const top = (window.outerHeight - height) / 2;
    //     const opts = 
    //     `status=1,width=${width},height=${height},top=${top},left=${left}`;
    //         window.open(twitterUrl, "twitter", opts);
    // }


    return (
        
        <div className="cup-section" id="test">

            <div id="cup">
                <div style={{height: dailyAmount / goal * 300}} className="level"></div>
                <div className="straw"></div>
                <div className="straw-head"> </div>
            </div>
            <button className="save-cup-button" onClick={handleShare}>
                Save My Cup
            </button>
        </div>
        
    )
}