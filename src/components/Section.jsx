import React from 'react'

const Section = ({children, className}) => {
  return (
    <div className={`pt-20 pb-35 bg-white ${className}`}>
        {children}
    </div>
  )
}

export default Section