import {fetchUsers} from './../store/actions'
import {connect} from 'react-redux'

import Post from './Post'
import Loader from './Loader'

 const AsyncPosts = (props) => {
   console.log(props)
  const posts = props.posts
  const isLoading = props.isLoading
   return (
      <div className="async-posts">
          <h2>async posts</h2>
          <button onClick={() => props.fetchUsers()}>загрузить посты</button>
          <div>
            {
              isLoading
              && <Loader/>
              }
          </div>
          {
            posts.length > 0
            ? posts.map(post => {
                return <Post postInfo ={post}/>
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