import React, {Component} from 'react';

class UserForm extends Component {

    onSubmit (e) {
        e.preventDefault();
        const node = this.refs.user;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add User"
                        ref='user'
                        required
                    />
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    setUserName: React.PropTypes.func.isRequired
}

export default UserForm