import React from 'react'
import formStyles from '../styles/Form.module.css'

const Form = () => {
    const submitChoice = async event => {
        event.preventDefault()
    
        const res = await fetch(
          '/api/hello',
          {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
    }

    return (
    <div className={formStyles.main}>
        <form onSubmit={submitChoice}>

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />

            <button type="submit">I will attend</button>
        </form>
    </div>
    )
}

export default Form