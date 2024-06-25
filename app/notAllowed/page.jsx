import React from 'react'

const notAllowed = () => {
  return (
    <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",marginTop:"100px"}}>
        <p style={{width:"100%", textAlign:"center"}}>Only admin can access</p>
        <p>Admin: /// email: ahmad@gmail.com  password: 123456 </p>
    </div>
  )
}

export default notAllowed;