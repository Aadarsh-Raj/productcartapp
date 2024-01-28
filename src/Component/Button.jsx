import React from 'react'

const Button = (prop) => {

  return (
        <>
            <button className={prop.cName} onClick={prop.clickEvent}>
                {
                    prop.sign
                }
            </button>
        
        </>
  )
}

export default Button
