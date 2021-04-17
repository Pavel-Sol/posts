import {fetchUsers} from './../store/actions'
import {connect} from 'react-redux'

import Post from './Post'
import Loader from './Loader'

 const AsyncPosts = (props) => {
  const posts = props.posts
  const isLoading = props.isLoading
   return (
      <div className="async-posts">
          <h2>асинхронные посты</h2>
          <button className='btn' onClick={() => props.fetchUsers()}>загрузить посты</button>
          <div>
            {
              isLoading
              && <Loader/>
              }
          </div>
          {
            posts.length > 0
            ? posts.map(post => {
                return <Post key={post.id + Date.now()} postInfo ={post}/>
            })

            :null
          }
        </div>
   )
}

const mapStateToProps = (state) => {
  return{
    posts : state.postReducer.asyncPosts,
    isLoading: state.appReducer.isLoading
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts)