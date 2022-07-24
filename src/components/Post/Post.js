import react from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ClearIcon from "@mui/icons-material/Clear";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div className="post-profile">
        <a href="profile.html">
          <img
            className="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <h3>John Doe</h3>
        </a>
      </div>
      <div>
        <p className="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus
          corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis.
          Amet accusamus distinctio cupiditate blanditiis dolor? Illo
          perferendis eveniet cum cupiditate aliquam?
        </p>
        <p className="post-date">Posted on 04/16/2019</p>
        <button type="button" className="btn btn-light">
          <div className="likes-button">
            <ThumbUpIcon></ThumbUpIcon>
            <span>4</span>
          </div>
        </button>
        <button type="button" className="btn btn-light">
          <ThumbDownIcon></ThumbDownIcon>
        </button>
        <a href="post.html" className="btn btn-primary">
          Discussion <span className="comment-count">3</span>
        </a>
        <button type="button" className="btn btn-danger">
          <ClearIcon></ClearIcon>
        </button>
      </div>
    </div>
  );
};

export default Post;
