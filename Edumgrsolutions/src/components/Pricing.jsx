import React from 'react'
import './Pricing.css'

const Pricing = () => {
    React
  return (
   <>
     <div className='pricing'>
        <h1>Pricing</h1>
      <div className='plan'>
        <div className='student'>
        <div className='left'><p>Students</p></div>
            <p><span>#2,500</span><br></br>per Child/Session</p>
            <p>Report Tracking and Generation</p>
            <p>One Time ID Generation</p>
            <p>24/7 Customer Care<br></br>and Support</p>
            <p>Direct School Chat</p>
            <p>Parent Access</p><br></br><br></br>
            <button>Sign Up</button>
        </div>
        <div className='school'>
            <div className='right'><p>Schools</p></div>
            <p><span>#50,000</span><br></br>One Off Sign Up</p>
            <p>Classroom Management</p>
            <p>24/7 Customer Care<br></br>and Support</p>
            <p>Few Management</p>
            <p>Report Generation</p>
            <p>Bulk SMS Support</p><br></br><br></br>
            <button>Sign Up</button>
        </div>
       </div>
     </div>
    </>
  )
}

export default Pricing