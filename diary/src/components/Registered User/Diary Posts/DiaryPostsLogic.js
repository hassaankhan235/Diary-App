import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../../store/features/postSlice'
import DiaryPost from './DiaryPost'
 
function DiaryPostsLogic() {    

  const dispatch = useDispatch()  
  const email = useSelector((state) => state.myReducer.user.email);

    useEffect(() => {
        dispatch(getPosts(email))
      },[dispatch, email])
    


  
    return (
      <div className='containerpost d-flex flex-row flex-wrap'>
    {
        useSelector((state) => {
          console.log("POST LENGTH",state.postReducer.posts.length)
          if(state.postReducer.posts){
            return state.postReducer.posts.map(post => {
              
              return (

                <DiaryPost props = {post} email = {email} key= {`${post.postid}`} /> 
         
                )
          })
          }
        })
    }

    </div>
  )
}

export default DiaryPostsLogic
