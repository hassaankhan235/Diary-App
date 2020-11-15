import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../../store/features/postSlice";
import { getPostCount , getPosts} from '../../../store/features/postSlice'

function DiaryPost(props) {

  const [editing, setEditing] = useState(false);
  const [editedPost, setEditedPost] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditedPost(e.target.value);
  };
  // Extracting properties from nested object. -- Deep destructuring
  const {
    props: { post, date, topic, postid }
  } = props;
  const {email} = props

  return (
    <div className="p-2 bg-info col-lg-5 mt-2 mt-3 ml-3 mb-3">
      <div className="d-flex">
        <div>
          <div className="text-light"> 
          <i className="fa fa-book mr-1"></i>TOPIC </div>
          <div className="bg-warning text-uppercase pl-2 pr-2"> {topic} </div>
        </div>

        <div className="ml-auto text-light">
          <div> 
          <i className="far fa-calendar"></i> DATE </div>
          <div className="bg-info text-uppercase"> {date} </div>
        </div>
      </div>

      <textarea
        id="text-area"
        className="md-textarea form-control z-depth-1"
        rows="3"
        value={editing ? editedPost : post}
        disabled = {!editing}
        onChange={(e) => handleChange(e)}
      ></textarea>

      <div className='d-flex mt-2'>
      <button
        className="btn btn-dark "
        onClick={() => {
          setEditing(true);
          setEditedPost(post);
        }}
        disabled = {editing}
      >
      <i className="fa fa-edit mr-1" style={{color:'white'}}></i> 
      Edit
      </button>

      <button className = 'btn btn-primary ml-1'
      onClick = {() => {
        dispatch(updatePost({postid:postid,post:editedPost}))
        setEditing(false)
        setEditedPost('')
        setTimeout(() => {
          dispatch(getPostCount(email))
          dispatch(getPosts(email))
        },900)
      }}
      disabled = {!editing} > 
      <i className="fa fa-save mr-1" style={{color:'white'}}></i>
      Save </button>

      <button
        className="btn btn-outline-danger ml-1 ml-auto"
        onClick={() => {
          dispatch(deletePost({ postid: postid }))
          setTimeout(() => {
            dispatch(getPostCount(email))
            dispatch(getPosts(email))
          } , 900)
        } }
      >
      <i className="fa fa-trash mr-1" style={{color:'white'}}></i>
        Delete
      </button>
      </div>

    </div>
  );
}

export default DiaryPost;
