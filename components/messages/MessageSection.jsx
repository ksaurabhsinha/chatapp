import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from "./MessageForm.jsx";

class MessageSection extends  Component {

    render() {
        return (
            <div className="col-md-9 current-chat">
                <div className="row chat-toolbar-row">
                    <div className="col-sm-12">
                        <div className="btn-group chat-toolbar" role="group" aria-label="...">
                            <h4>{this.props.activeChannel.name}</h4>
                        </div>
                    </div>
                </div>
                {<MessageList {...this.props}/>}
                {<MessageForm {...this.props}/>}
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.object.isRequired,
    addMessage: React.PropTypes.func.isRequired
}

export default MessageSection