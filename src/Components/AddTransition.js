import React, { useState } from 'react'

const AddTransition = () => {
    const [text , settext] = useState('');
    const [amount , setamount] = useState(0);

  return (
    <>
        <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text </label>
          <input type="text" value={text} onChange={ (e)=> settext(e.target.value)  }  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number"  value={amount} onChange={ (e) => setamount(e.target.value)  }  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    
    </>
  )
}

export default AddTransition