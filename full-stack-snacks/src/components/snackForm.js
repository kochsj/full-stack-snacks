import React from 'react';

export default class SnackForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            snackName : props.name,
            description : props.desc,
        }
        this.doneHandler = props.doneHandler
        this.updateHandler = this.updateHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    updateHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler(event){
        event.preventDefault()
        // submission of NEW snack
        if(!this.props.idNum){
            let newId = Date.now()
            let newSnack = {id: newId, title: this.state.snackName, description: this.state.description}
            this.doneHandler(newSnack)
            this.setState({
                snackName: '',
                description: '',
            })
        // Updating snack
        }else{
            let newSnack = {id: this.props.idNum, title: this.state.snackName, description: this.state.description}
            this.doneHandler(newSnack)
            this.setState({
                snackName: this.state.snackName,
                description: this.state.description,
            })
        }
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="snackName" value={this.state.snackName} onChange={this.updateHandler}/>
                <input type="text" name="description" value={this.state.description} onChange={this.updateHandler}/>
                <button>ok</button>
            </form>
        )
    }
}