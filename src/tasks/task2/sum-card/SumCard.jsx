import React from 'react'

const SumCard = ({sum}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',margin:'20px',borderStyle:'solid',borderRadius:'5px',padding:'3px'}}>

        <div>
         <h5>Sum</h5>
        </div>
        <div>
         <h5>{sum}</h5>
        </div>
    </div>
  )
}

export default SumCard