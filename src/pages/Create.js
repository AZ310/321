import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom" // to make the user go back to the home page after successfully adding a smoothie

const Create = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError]= useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault() //so the page does not reload upon submition

    if(!title || !method || !rating){
      setFormError('Please fill in all the fields')
      return
    }

    const {data,error} = await supabase  //we make the function async to be able to make this await
      .from('smoothies')
      .insert([{title,method,rating}]) // each {} is a different object therefore a different row

    if(error){
      console.log(error)
      setFormError('Please fill in all the fields')
    }

    if(data){
      console.log(data)
      setFormError(null) //to remove the error after fixing the error
      navigate('/')
    }

  }


  return (
    <div className="page create">
       <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea 
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create