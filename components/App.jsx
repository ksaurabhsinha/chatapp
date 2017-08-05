import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: []
        };
    }

    addChannel() {
        let {channels} = this.state.channels;
        channels.push({id: channels.length, name});
        this.setState({channels});
        // TODO: Send the channel to server
    }

    setChannel(activeChannel) {
        this.setState({activeChannel});
        // TODO: Get the latest message for this active channel
    }

    render() {
        return (
            <ChannelSection
                channels={this.state.channels}
                setChannel={this.setChannel.bind(this)}
                addChannel={this.addChannel.bind(this)}
            />
        )
    }
}
