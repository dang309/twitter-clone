import React, { useState } from "react";
import "../css/TweetBox.css";
import { Avatar, Button, Input } from "@material-ui/core";
import db from "./firebase";
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import TextareaAutosize from 'react-autosize-textarea'

    

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [imgSrc, setImgSrc] = useState('');
  var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
      setImgSrc(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "HaiDang",
      username: "haiDang309",
      verified: true,
      text: tweetMessage,
      image: imgSrc,
      avatar: "https://twitter.com/DanielN71663852/photo",
    });

    setTweetMessage("");
    setImgSrc("");
  };

  return (
    <div className="tweetBox">
      <Avatar
        className="tweetBox__avatar"
        src="https://twitter.com/DanielN71663852/photo"
      />
      <div className="tweetBox__status">
        <div className="tweetBox__input">
          <form>
            <TextareaAutosize
              rows="1"
              maxRows="10"
              async="true"
              cols="50"
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </form>
          <img src={imgSrc} alt="" id="tweetBox__imgOutput" />
        </div>

        <div className="tweetBox__privacy">
          <PublicIcon /> <span>Everyone can reply</span>
        </div>

        <div className="tweetBox__horizontal"></div>

        <div className="tweetBox__footer">
          <div className="tweetBox__footer__icons">
            <div className="tweetBox__imgUpload">
              <label for="tweetBox__previewImg">
                <ImageOutlinedIcon className="icons" />
              </label>
              <input
                type="file"
                id="tweetBox__previewImg"
                style={{ display: "none" }}
                onChange={(e) => loadFile(e)}
              />
            </div>
            <GifOutlinedIcon className="icons" />
            <PollOutlinedIcon className="icons" />
            <SentimentSatisfiedOutlinedIcon className="icons" />
            <CalendarTodayIcon className="icons" />
          </div>
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetBox_tweetBoxButton"
            disabled={tweetMessage === ""}
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
