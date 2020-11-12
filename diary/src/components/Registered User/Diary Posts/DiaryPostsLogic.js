import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, getPostCount, post } from '../../../store/features/postSlice'
import DiaryPost from './DiaryPost'
 
function DiaryPostsLogic() {
    const dispatch = useDispatch()
    const email = useSelector((state) => state.myReducer.user.email);
    const posts = useSelector((state) => state.postReducer.posts )
    
    useEffect(() => {
        dispatch(getPosts(email))
        dispatch(getPostCount(email))
      },[])

  
    return (
      <div className='containerpost d-flex flex-row flex-wrap '>
    {
        useSelector((state) => {
          console.log("POST LENGTH",state.postReducer.posts.length)
          if(state.postReducer.posts.length-1){
            return state.postReducer.posts.map(post => {
              return (
                <DiaryPost props = {post} /> 
                 )
          })
          }
        })
    }

    </div>
  )
}

export default DiaryPostsLogic
