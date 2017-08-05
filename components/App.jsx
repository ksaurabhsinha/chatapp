import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel: {}
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

    render() {
        return (

            <div className='row app'>
                <div className="col-md-3">
                    <ChannelSection
                        {...this.state}
                        setChannel={this.setChannel.bind(this)}
                        addChannel={this.addChannel.bind(this)}
                    />
                </div>
                <div className="col-md-9 current-chat">

                </div>
            </div>
        )
    }
}

export default App
