import {connect} from 'react-redux'
import Post from './Post'

const SyncPosts = (props) => {
   return (
      <div className="sync-posts">
         <h2>синхронные посты</h2>
         <div className='sync-posts__list'>
            {  props.syncPosts.length > 0
               ? props.syncPosts.map(post => <Post key={post.id + Date.now()} postInfo={post}/>)
               : <div className='sync-posts__warn'>Постов пока нет</div>
            }
         </div>
      </div>
   )   
}


const mapStateToProps = (state) => {
   return {
      syncPosts: state.postReducer.posts
   }
}

export default connect(mapStateToProps, null)(SyncPosts)

