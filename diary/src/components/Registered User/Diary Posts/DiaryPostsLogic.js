import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, getPostCount, post } from '../../../store/features/postSlice'
import DiaryPost from './DiaryPost'
 
function DiaryPostsLogic() {
    const dispatch = useDispatch()
    const email = useSelector((state) => state.myReducer.user.email);
    const posts = useSelector((state) => state.postReducer.postCount )
    
    useEffect(() => {
        dispatch(getPosts(email))
      },[])


  
    return (
      <div className='containerpost d-flex flex-row flex-wrap'>
    {
        useSelector((state) => {
          console.log("POST LENGTH",state.postReducer.posts.length)
          if(state.postReducer.posts){
            return state.postReducer.posts.map(post => {
              
              return (

                <DiaryPost key={post.postid} props = {post} email = {email}/> 
         
                )
          })
          }
        })
    }

    </div>
  )
}

export default DiaryPostsLogic
