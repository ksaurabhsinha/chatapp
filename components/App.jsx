import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel: {},
            users: [],
            acitveUser: {}
        };
    }

    addChannel(name) {
        let {channels} = this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        // TODO: Send the channel to server
    }

    setChannel(activeChannel) {
        this.setState({activeChannel});
        // TODO: Get the latest message for this active channel
    }

    addUser(name) {
        let {users} = this.state;
        users.push({id: users.length, name});
        this.setState({users});
        // TODO: Send the name to the server
    }

    setUser(activeUser) {
        this.setState({activeUser});
        // TODO: Get the lastest message for this active user
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
                        setUser={this.setUser.bind(this)}
                        addUser={this.addUser.bind(this)}
                    />

                </div>
                <div className="col-md-9 current-chat">

                </div>
            </div>
        )
    }
}

export default App
