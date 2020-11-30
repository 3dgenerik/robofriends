import React from 'react'
import Card from '../components/Card'

const CardList = ({robots}) => {

    // if(true){
    //     throw new Error("ERROOOOOOR");
    // }

    const robotsList = robots.map((robot, idx) => {
        return <Card key = {idx} name = {robot.name} id = {robot.id} email = {robot.email} username = {robot.username} website = {robot.website}/>
    });

    return (
        <div>
            {robotsList}
        </div>
    )
}

export default CardList;