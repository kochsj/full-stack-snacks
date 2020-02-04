import React from 'react'
import { Link } from "react-router-dom"

export default props => (
    <>
        <p>{props.snack.name}</p>
        <p>{props.snack.id}</p>
    </>
)

    