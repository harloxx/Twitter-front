import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";

const Post = forwardRef(
  (
    {
      displayName,
      username,
      verified,
      text,
      image,
      avatar,
      comment,
      retweet,
      like,
      tag,
    },
    ref
  ) => {
    return (
      <article>
        <div className="post" ref={ref}>
          <div className="post__avatar">
            <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {displayName}{" "}
                  <span className="post__headerSpecial">
                    {verified && <VerifiedUserIcon className="post__badge" />} @
                    {username} . 1분
                  </span>
                </h3>
              </div>

              <MoreHorizTwoToneIcon fontSize="small" color="action" />
            </div>
            <div className="post__description">
              <p>
                {text} <tag>{tag}</tag>
              </p>
            </div>
            {image && <img src={image} alt="" />}
            <div className="post__footer">
              <div>
                <ChatBubbleOutlineIcon fontSize="small" color="action" />
                {comment}
              </div>
              <div>
                <RepeatIcon fontSize="small" color="action" />
                {retweet}
              </div>
              <div>
                <FavoriteBorderIcon fontSize="small" color="action" />
                {like}
              </div>
              <div>
                <PublishIcon fontSize="small" color="action" />
              </div>
              <div>
                <BarChartIcon fontSize="small" color="action" />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
);

export default Post;
