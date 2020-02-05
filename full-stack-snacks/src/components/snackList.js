import React from 'react';
import { Link } from 'react-router-dom';

import SnackForm from './snackForm';

export default props => ( 
    <>
        <ul>
            {props.snacks.map(snack => <ListItem key={snack.id} snack={snack}/>)}
        </ul>
        <SnackForm name={''} desc={''} doneHandler={props.doneHandler}/>
    </>
)

function ListItem(props){
    return (
    <li>
        <Link to={`/${props.snack.id}`}>
            <p>{props.snack.title}</p>
        </Link>
    </li>)
}