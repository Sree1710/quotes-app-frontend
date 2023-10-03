import React, { useState } from 'react'
import Header from './Header'

const AddQuotes = () => {

    const [inputField,setInputField]=useState(
        {id:"",quote:"",author:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
        
    }

    const readValue=()=>{
        console.log(inputField)
    }

  return (
    <div>
        <Header/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>Add Quotes</h1>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">ID</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="id" value={inputField.id} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Quote</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="quote" value={inputField.quote}  />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Author</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="author" value={inputField.author} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default AddQuotes