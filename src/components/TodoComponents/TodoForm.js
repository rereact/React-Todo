import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ""
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitTask = e => {
        this.setState({ item: "" })
        this.props.addTask(e, this.state.item)
    }

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    value={this.state.item}
                    name="item"
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm