import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../../store/features/postSlice'
import DiaryPost from './DiaryPost'

function DiaryPostsLogic() {
    const dispatch = useDispatch()
    const email = useSelector((state) => state.myReducer.user.email);

    useEffect(() => {
        dispatch(getPosts(email))
      },[])
  
    return (
      <div className='containerpost d-flex flex-row flex-wrap '>
    {
        useSelector((state) => {
            return state.postReducer.posts.map(post => {
                console.log("DIARY", post.post)
                return (
                  <DiaryPost props = {post} /> 
                   )
            })
        })
    }

    </div>
  )
}

export default DiaryPostsLogic
