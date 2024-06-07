import React from 'react'


const ResetButton = ({handleReset}) => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <button style={{cursor:'pointer',borderStyle:'solid',borderRadius:'5px',padding:'10px',background:'red',color:'white'}} onClick={handleReset}>
            Reset
        </button>
    </div>
  )
}

export default ResetButton