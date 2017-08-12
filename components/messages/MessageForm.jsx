import React, {Component} from 'react';

class MessageForm extends Component {

    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        this.props.addMessage(message);
        node.value = '';
    }

    render () {
        let input;

        if(this.props.activeChannel !== undefined) {
            input = (
                <input
                    type="text"
                    className="form-control"
                    ref="message"
                    placeholder="Add Message..."
                    required
                />
            )
        }

        return (
            <div className="row current-chat-footer">
                <div className="panel-footer">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="input-group">
                            { input }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

MessageForm.propTypes = {
    activeChannel: React.PropTypes.object.isRequired,
    addMessage: React.PropTypes.func.isRequired
}

export default MessageForm