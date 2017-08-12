import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from "./messages/MessageSection.jsx";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel: {},
            users: [],
            activeUser: {},
            messages: [],
            connected: false,
        };
    }

    componentDidMount() {
        let ws = this.ws = new WebSocket('ws://echo.websocket.org');
        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
    }

    message(e) {
        const event = JSON.parse(e.data);
        if(event.name === 'channel add') {
            this.newChannel(event.data);
        }
    }

    open() {
        this.setState({connected: true});
    }

    close() {
        this.setState({connected: false});
    }

    newChannel(channel) {
        let {channels} = this.state;
        channels.push(channel);
        this.setState(channels);
    }

    addChannel(name) {
        let {channels} = this.state;

        let msg = {
            name: 'channel add',
            data: {
                id: channels.length,
                name: name
            }
        };

        this.ws.send(JSON.stringify(msg));
    }

    setChannel(activeChannel) {
        this.setState({activeChannel});
        // TODO: Get the latest message for this active channel
    }

    setUserName(name) {
        let {users} = this.state;
        users.push({id: users.length, name});
        this.setState({users});
        // TODO: Send the name to the server
    }

    addMessage(body) {
        let {messages, users} = this.state;
        let createdAt = new Date;
        let author = users.length > 0 ? users[0].name : 'anonymous';

        messages.push({id: messages.length, body, createdAt, author});
        this.setState({messages});
    }

    render() {
        return (
            <div className='row app'>
                <div className="col-md-3">
                    <ChannelSection
                        {...this.state}
                        setChannel={this.setChannel.bind(this)}
                        addChannel={this.addChannel.bind(this)}
                    />
                    
                    <UserSection
                        {...this.state}
                        setUserName={this.setUserName.bind(this)}
                    />

                </div>
                <MessageSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                />
            </div>
        )
    }
}

export default App
