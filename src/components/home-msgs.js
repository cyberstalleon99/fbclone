import React, {Component} from 'react';
import HomeMsgItem from './home-msg-item';


class HomeMsgs extends Component {
    render() {
	    return (
        <div  style={{flexDirection: 'row',flex:1}}>
            <h1> Row List of Messages</h1>
            <homeMsgItem />
            <homeMsgItem />
            <homeMsgItem />
            <homeMsgItem />
            <homeMsgItem />

        </div>
        
        );
    }
}
export default HomeMsgs;