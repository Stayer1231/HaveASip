import React from 'react'
import './introduction.scss'

function Introduction() {
  return (
    <div id='introduction-container'>
      <h1 className='introduction-title tw-pt-36 tw-text-center'>What is this page?</h1>
      <div id='introduction-box-container'>
        <div className='introduction-box tw-grid'>
          <p className='tw-text-black information-title'>
            This page is establised to remind people to drink water. Water is the neccessary thing for our life.
            We should consider drinking water as a habit. By drinking water regularly, we can improve our health and our life.
            We consider this project as a small contribution to the community to improve the health of people.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction