import React, {Component} from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

class UserSection extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <h4>Users</h4>
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}

UserSection.propTypes = {
    users: React.PropTypes.array.isRequired,
    setUser: React.PropTypes.func.isRequired,
    addUser: React.PropTypes.func.isRequired,
    activeUser: React.PropTypes.object.isRequired
}

export default UserSection