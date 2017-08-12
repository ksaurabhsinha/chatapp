import React, {Component} from 'react';
import fecha from 'fecha';

class Message extends Component {
    render() {

        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YY');

        return (
            <li className='media'>
                <div className='media-body'>
                    <div className='media'>
                        <a className='pull-left' href='#'>
                            <img className='media-object img-circle '
                                 src='https://app.teamsupport.com/dc/1078/UserAvatar/1839999/48/1470773165634' />
                        </a>
                        <div className='media-body'>
                            {message.body}
                            <br />
                            <small className='text-muted'>{message.author} | {createdAt}</small>
                            <hr />
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}

export default Message

