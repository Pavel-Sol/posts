import {fetchUsers} from './../store/actions'
import {connect} from 'react-redux'

 const AsyncPosts = (props) => {
   console.log(props)
  const posts = props.posts
   return (
      <div className="async-posts">
          <h2>async posts</h2>
          <button onClick={() => props.fetchUsers()}>загрузить посты</button>
          {
            posts.length > 0
            ? posts.map(post => {
                return <li>{post.title}</li>
            })

            :null
          }
        </div>
   )
}

const mapStateToProps = (state) => {
  return{
    posts : state.postReducer.asyncPosts
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncPosts)