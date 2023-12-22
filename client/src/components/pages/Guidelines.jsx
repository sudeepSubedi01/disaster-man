import React from 'react'
import Navbar from '../navbar/Navbar'
import './Guidelines.css'

const Guidelines = () => {
  return (
    <>
    <Navbar/>
    <div className='pdfContainer' >
    <embed
        src="/volunteer_guidelines.pdf"
        type="application/pdf"
        className='pdfDocument'
      />
    </div>
    </>
  )
}

export default Guidelines