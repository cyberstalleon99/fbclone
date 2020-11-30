import React, {Component} from 'react';
import HomeNotifItem from './home-notif-item';


class HomeNotifs extends Component {
    render() {
	    return  (
        <div style={{flexDirection: 'row',flex:1}}>
            <h1> Row List of Notifications</h1>
            <HomeNotifItem />
            <HomeNotifItem />
            <HomeNotifItem />

        </div>

        ) ;
    }
}
export default HomeNotifs;