import React, { useState } from "react";
import { post } from "../../store/features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getPostCount } from "../../store/features/postSlice";
import "./post.css";

function Post() {
  const email = useSelector((state) => state.myReducer.user.email);
  const dispatch = useDispatch();

  const [userpost, setPost] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState();

  const handlePost = (e) => {
    setPost(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTopic = (e) => {
    setTopic(e.target.value);
  };

  return (
    <div className="post-container col-md-6 mt-3 bg-info">
      <div className="d-flex">
        <div className="flex-column">
          <div className="text-light font-weight-bold">
          <i className="fa fa-book mr-1"></i>TOPIC </div>
          <input
            type="text"
            className="bg-warning text-uppercase"
            onChange={(e) => handleTopic(e)}
            value={topic}
          />
        </div>

        <div className="flex-column ml-auto">
          <div className="text-light font-weight-bold ">
          <i className="far fa-calendar mr-1"></i>PICK A DATE </div>
          <input
            type="date"
            className="mb-2 bg-warning text-uppercase"
            onChange={(e) => handleDate(e)}
            value={date}
          />
        </div>
      </div>

      <div className="text-light  font-weight-bold mt-3">
        {" "}
        WRITE YOUR DIARY POST HERE{" "}
      </div>
      <div className="md-form mb-4 pink-textarea active-pink-textarea-2">
        <textarea
          id="text-area"
          className="md-textarea form-control z-depth-1"
          rows="3"
          value={userpost}
          onChange={(e) => handlePost(e)}
        ></textarea>
      </div>

      <button
        onClick={() => {
          dispatch(
            post({
              post: userpost,
              date: date || new Date(),
              topic: topic || "Daily Note",
              email: email,
            })
          );
          setTimeout(() => {
            dispatch(getPosts(email))
            dispatch(getPostCount(email))
          }, 800);
          setTopic("");
          setPost("");
          setDate();
        }}
        className="btn btn-outline-primary btn-lg btn-block mg-3"
      >
      <i className="fa fa-save mr-1" style={{color:'white'}}></i> SAVE
      </button>
    </div>
  );
}

export default Post;
