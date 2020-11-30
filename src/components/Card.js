import React from 'react'

const Card = ({id, name, email, username, website} ) => {
    return(
        <div className = {`bg-light-green br3 dib grow pa3 ma3 tc ba b--dark-green bw1 shadow-5`}>
            <h2>{username}</h2>
            <p className = 'i'>{website}</p>
            <img alt = "robot" src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h1>{name}</h1>
                <p className = 'i'>{email}</p>
            </div>
        </div>
    )
}

export default Card;