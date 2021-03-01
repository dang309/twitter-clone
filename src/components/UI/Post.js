import React, { memo } from 'react'
import PropTypes from 'prop-types'
import "../css/Post.css";
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";
import { TwitterTweetEmbed, TwitterMomentShare } from "react-twitter-embed";

const Post = memo(function Post(props) {
    const { displayName, username, verified, text, image, avatar } = props;
    return (
      <div style={{height: '100%'}}>
        <TwitterMomentShare style={{cursor: 'pointer'}} momentId={"650667182356082688"} />
        <div className="post">
          <div className="post__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <span>{displayName} </span>
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                </span>
                <span> @{username}</span>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>

            <div className="post__image">
              <img src={image} alt="" />
            </div>

            <div className="post__footer">
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    );
})

Post.propTypes = {
  displayName: PropTypes.string,
  username: PropTypes.string,
  verified: PropTypes.bool,
  text: PropTypes.string,
  image: PropTypes.string,
  avatar: PropTypes.string
}

export default Post
