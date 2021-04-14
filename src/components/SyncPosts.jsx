import {connect} from 'react-redux'
import Post from './Post'

const SyncPosts = (props) => {
   console.log(props)
  if (props.syncPosts.length > 0) {
   return (
      <div className="sync-posts">
          <h2>sync posts</h2>
          <div className='list'>
             {
                props.syncPosts.map(post => <Post post={post}/>)
             }
          </div>
        </div>
   )
  }
   
}


const mapStateToProps = (state) => {
   return {
      syncPosts: state.postReducer.posts
   }
}

export default connect(mapStateToProps, null)(SyncPosts)

