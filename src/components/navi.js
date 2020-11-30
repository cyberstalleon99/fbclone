import React, {Component} from 'react';



class Navi extends Component {
    render() {
	    return (
            <header id="header" className="fixed-top">
                <div className="container">
    
                    <div className="logo float-left" style={{flexDirection: 'column'}}>
                        
                        <div className="input-group mb-3">
                            <h1 className="text-light"><a href="index.html"><span style={{color : "#888245", fontWeight : 'bolder', paddingRight:10}}>TIMPLEYT</span></a></h1>
                        
                            <input type="text" className="form-control" placeholder="Searcj . . ." style={{borderRadius:10}} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{borderColor:'transparent'}}><i className='bx bx-search-alt'></i></button>
                            </div>
                        </div>
                        
                    </div>
    
                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul>
                            <li ><a href="index.html"><i className='bx bxs-skull'></i> Fname</a></li> 
                            <li ><a href="index.html"><i className='bx bxs-bell-ring'></i></a></li>
                            <li ><a href="index.html"><i className='bx bxs-message-detail'></i></a></li>
                            <li className="active" ><a href="index.html"><i className='bx bxs-grid'></i></a></li>
                            <li className="drop-down"><a href=""></a>
                                <ul>
                                    <li><a href="#"><i className='bx bxs-wrench'></i> Settings</a></li>
                                    <li><a href="#"><i className='bx bxs-arrow-from-right'></i> Logout</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </nav>
    
                </div>
            </header>
        );
    }
}
export default Navi;