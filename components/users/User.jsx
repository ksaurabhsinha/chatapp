import React, {Component} from 'react';

class User extends Component {

    render() {
        return (
            <li className='list-group-item'>
                {this.props.user.name}
            </li>
        )
    }
}

User.propTypes = {
    user: React.PropTypes.object.isRequired,
}

export default User