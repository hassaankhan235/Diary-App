import React from 'react'

function DiaryPost(props) {
    // Extracting properties from nested object. -- Deep destructuring
    const {props : {post, date, topic}} = props
  return (
    <div className="p-2 bg-info col-lg-5 mt-2 mt-3 ml-3">

    <div className='d-flex'>
    
    <div>
    <div className='text-light'> TOPIC </div> 
    <div className='bg-warning text-uppercase pl-2 pr-2' > {topic} </div>
    </div>
    

    <div className='ml-auto text-light'>
    <div> DATE </div> 
    <div className='bg-info text-uppercase' > {date} </div>
    </div>

    </div>

    <textarea
          id="text-area"
          className="md-textarea form-control z-depth-1"
          rows="3"
          value= {post}
          disabled
        ></textarea>

    <button className='btn btn-outline-dark mt-1' > Edit </button>
  </div>
  )
}

export default DiaryPost
