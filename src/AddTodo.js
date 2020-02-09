import React, {Component} from 'react'

class AddTodo extends Component{
    state ={
        content: ''
    }

    handleOnChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="content">Enter your todo: </label>
                    <input type="text" name="content" id="content" onChange={this.handleOnChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo