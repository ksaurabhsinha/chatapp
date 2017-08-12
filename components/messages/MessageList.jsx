import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

    render() {
        return (
            <div className="row current-chat-area">
                <div className="col-md-12">
                    <ul className="media-list">{
                        this.props.messages.map(message => {
                            return (<Message
                                key={message.id}
                                message={message}
                            />)
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessageList