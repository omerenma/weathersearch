import React,{Component} from 'react';

const Heading = ({title, description}) =>{
    return (
        <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        </div>
    )
}

export default Heading;