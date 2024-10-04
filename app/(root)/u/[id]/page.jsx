import React from 'react'

const UserPage = ({ params }) => {
  return (
    <div>
      Username: {params.id}
    </div>
  )
}

export default UserPage