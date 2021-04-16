import {useState} from 'react'
import {connect} from 'react-redux'
import {addPostAC} from './../store/postReducer'



 const Form = (props) => {
   //  console.log(props)
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
         props.addPostAC(newPost)
      }
     

      setInpText('')
   }

   

   return (
      <div className="form__wrapper">
        <form onSubmit={(e) => submitHandler(e)} action="">
           <input value={inpText} onChange={(e) => updateInputHandler(e)} type="text"/>
           <button 
           type='submit'>отправить</button>
        </form>
      </div>
   )
}

const mapDispatchToProps = {
   addPostAC    
}

export default connect(null, mapDispatchToProps)(Form)