import React from 'react'
import '../style.css'

const Users = ({loading, users}) => {
    const mainstyle = {
        display: 'flex'
    };
    return loading ? (
        <div id='main' align= 'center'>
            <img src="https://i.stack.imgur.com/ATB3o.gif" alt="loading.." className='loader' />
        </div>
    ) : (
        <div id='main' style={mainstyle}>
            {users.map((user)=>( <div className='profile_cont' key={user.id}>
                {console.log(user)}
                <img src={user.avatar} alt={user.avatar} className='avatar' />
                <h1 className='name'>
                    {user.first_name} {user.last_name}
                </h1>
                <p className='email'>{user.email}</p>
                <p>User id: {user.id}</p>
            </div> ))}
        </div>
    )
}

export default Users
