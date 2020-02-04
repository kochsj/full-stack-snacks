import React from 'react'
import { Link } from "react-router-dom"

export default props => (
    <>
        <Link to={`/`}>Home</Link>
        <p>ID: {props.snack.id}</p>
        <p>SNACK: {props.snack.name}</p>
        <p>DESCRIPTION: {props.snack.desc}</p>
    </>
)

    