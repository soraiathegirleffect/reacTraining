import React from "react";

function User(props){

    const {user} = props

    return (

        <div className="user">
    
          <div className='info'>
              {user.name}
            </div>

            <div className='info'>
              {user.age}
            </div>

            <div className='info'>
              {user.position}
            </div>

            <div className='info'>
              {user.image}
            </div>
    
          
    
        </div>
      )


}

export default User