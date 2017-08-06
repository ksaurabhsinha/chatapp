import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
    render() {
        return (
            <ul className="chats-row nav">{
                this.props.users.map(userInfo => {
                    return <User
                        user={userInfo}
                        {...this.props}
                    />
                })
            }
            </ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired,
    setUser: React.PropTypes.func.isRequired,
    activeUser: React.PropTypes.object.isRequired
}

export default UserList