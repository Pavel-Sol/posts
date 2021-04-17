import {useState} from 'react'
import {connect} from 'react-redux'
import {addPost} from './../store/actions'



 const Form = (props) => {
   const[inpText, setInpText] = useState('')

   const updateInputHandler = (event) => {

      setInpText(event.target.value)
   }

   const submitHandler = event => {
      event.preventDefault()

      const newPost ={
         title: inpText,
         id: Date.now().toString()
      }
      
      if (newPost.title.trim()) {
         props.addPost(newPost)
      } 
     

      setInpText('')
   }

   

   return (
      <div className='form__wrapper'>
        <form className='form' onSubmit={(e) => submitHandler(e)} action="">
           <input className='input__title' value={inpText} onChange={(e) => updateInputHandler(e)} type="text"/>
           <button
           className='btn' 
           type='submit'>добавить пост</button>
        </form>
      </div>
   )
}

const mapDispatchToProps = {
   addPost,
}



export default connect(null, mapDispatchToProps)(Form)