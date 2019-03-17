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

    render() {
        return(
            <form onSubmit={e => this.props.addTask(e, this.state.item)}>
                <input
                    type="text"
                    value={this.state.item}
                    name="item"
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm