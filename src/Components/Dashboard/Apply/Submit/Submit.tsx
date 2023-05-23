import React, { useState } from 'react'
import './Submit.scss'

import {BsCheckCircle} from 'react-icons/bs'

export default function Submit() {
  
    const [tick,setTick]=useState(false)
    return (
    <div className='Submit'>
        <h2>Application Request</h2>
        <label htmlFor="Price">
            Total Value(₹):
            <input type="number" name="" id="Price" />
        </label>
        <label htmlFor="number">
            Stock Amount:
            <input type="text" name="" id="Amt" />
        </label>

        <button onClick={()=>setTick(true)}>Submit </button>
        <p>{tick? 'Submitted Successfully' : ''} {tick? <BsCheckCircle /> : ''}</p>
    </div>
  )
}
