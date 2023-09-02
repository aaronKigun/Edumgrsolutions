import React from 'react'
import './Feature.css'

const Feature = () => {
    React
  return (
    <>
    <div className='feature'>
      <h1>Features</h1>
      <div className='List'>
        <div className='left'>
            <ul>
              <li>Subject Sheet Report Generation</li>
              <li>Academic Performance Reporting</li>
              <li>Attendance Records</li>
              <li>Academic Reports</li>
              <li>Lesson Plan</li>
              <li>Manage Students&apos; Information</li>  
            </ul>
        </div>
        <div className='center'>
            <ul>
              <li>Manage Staff Information</li>
              <li>Manage Bursary</li>
              <li>Admission / Enrollment</li>
              <li>Payments Report</li>
              <li>Manage Classroom</li>
              <li>Staff Training</li>  
            </ul>
        </div>
        <div className='right'>
            <ul>
              <li>CBT Examination Management(Online)</li>
              <li>Track Student&apos;s Academic Improvement</li>
              <li>Result Checking</li>
              <li>Track Staff Efficiency</li>
              <li>Customized Academic Report Generation</li>
              <li>School Financial Record Management</li>  
            </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Feature