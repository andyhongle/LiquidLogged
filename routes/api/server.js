const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const Twitter = require("twitter");
const fs = require("fs");
let ba64 = require("ba64");

require("dotenv").config();
const dotenv = require("dotenv");



const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



const deleteImage = () => {
  const path = "../../myimage.png";
  if (fs.existsSync(path)) {
    //file exists
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file removed
    });
  }
};

router.post("/imagetotweet", async (req, res) => {
  const { dataUrl, shareId } = req.body;
  // console.log("dataurl:" +  dataUrl);
  deleteImage();
  ba64.writeImage("myimage", dataUrl, (err) => {
    if (err) {
      console.log("Write image error", err);
    }
    console.log("Image saved successfully");

    fs.readFile("myimage.png", (err, data) => {
      if (err) {
        console.log("Read file err", err);
      }
      try {
        client.post(
          "media/upload",
          {
            media: data,
          },
          function (error, media, response) {
            if (error) {
              console.log("MEDIA UPLOAD", error);
            } else {
              const status = {
                status: "Just made a tweet",
                media_ids: media.media_id_string,
              };
              client.post("statuses/update", status, function (
                error,
                response
              ) {
                if (error) {
                  console.log("STATUS  UPDATE", error);
                } else {
                  res.status(200).json({
                    message: response.entities.media[0].display_url,
                  });
                  // console.log("Media", response.entities.media[0].display_url);
                }
              });
            }
          }
        );
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      // deleteImage();
    });
  });
});

router.get("/img", (req, res) => {
  res.send("<h1>test img</h1>");
});

router.get("/test", (req, res) => res.json({ msg: "This is the server route" }));

module.exports = router;