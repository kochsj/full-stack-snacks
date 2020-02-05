import React from 'react'
import { Link } from "react-router-dom"
import SnackForm from './snackForm';

export default props => (
    <>
        <Link to={`/`}>Home</Link>
        <p>ID: {props.snack.id}</p>
        <p>SNACK: {props.snack.title}</p>
        <p>DESCRIPTION: {props.snack.description}</p>
        <button onClick={props.deleteHandler} value={props.snack.id}>delete</button>
        <SnackForm idNum={props.snack.id} name={props.snack.title} desc={props.snack.description} doneHandler={props.doneHandler}/>
    </>
)
