import React, { useEffect, useState, useRef } from 'react';

import { NavItems } from './NavBar/NavItems';

function Navi (props){
    const [showMNav, setShowMNav] = useState(false)
    // const [activeLink, setActiveLink] = useState("Main")
  
    const handleClick = () => {
        setShowMNav(!showMNav)
        props.setMoNav(!showMNav)
    }

    return (
        <div>
            <button type="button" className="mobile-nav-toggle d-lg-none" onClick={handleClick}>
                {( !showMNav ? <i className="bx bx-menu"></i> : <i className='bx bxs-x-circle' style={{color:"#050604"}}></i>)}
            </button>
            <header id="header" className="fixed-top">
                <div className="container">

                    <div className="logo float-left" style={{flexDirection: 'column'}}>
                        
                        <div className="input-group mb-3">
                            <h1 className="text-light"><a href="index.html"><span style={{color : "#888245", fontWeight : 'bolder', paddingRight:10}}>TIMPLEYT</span></a></h1>
                        
                            <input type="text" className="form-control d-none d-lg-block" placeholder="Searcj . . ." style={{borderRadius:10, borderColor:'#161616', backgroundColor:'transparent',boxShadow:'transparent'}} />
                            <div className="input-group-append d-none d-lg-block">
                                <button className="btn btn-outline-dark " type="button" id="button-addon2" style={{borderColor:'transparent', backgroundColor:'transparent'}}><i className='bx bx-search-alt'></i></button>
                            </div>
                        </div>
                        
                    </div>
                  
                    <nav className="nav-menu float-right d-none d-lg-block">
                        
                        <ul className={showMNav ? 'nav-menu active' : 'nav-menu'}>
                            
                            {NavItems.map((item, index) => {
                                
                                return (item.dest === "home-nav" ?  <li className={( item.title === "Home" ? "active" : "")} > <a className={item.cName} href={item.url} data-toggle="tooltip" title={item.title}> <i className={item.icon}></i> </a></li> : null)                                         
            
                            })}

                            <li className="drop-down" ><a href="#"><i className="bx bxs-skull"></i> User</a>
                                <ul>
                                    {NavItems.map((item, index) => {
                                        return (item.dest === "sub-home-nav" ?  <li className="" > <a className={item.cName} href={item.url}> <i className={item.icon}></i> {item.title}</a></li> : null)
                
                                    })}
                                </ul>
                                
                            </li>
                            
                        </ul>
                        
                    </nav>

                </div>
            </header>
            <nav className="mobile-nav d-lg-none">
                
                <ul className={showMNav ? 'nav-menu active' : 'nav-menu'}>
                    <li style={{padding:"10px"}}><input type="text" className="form-control" placeholder="Searcj . . ." style={{padding:"10px", borderRadius:10, borderColor:'#161616', backgroundColor:'transparent',boxShadow:'transparent'}} /></li>            
                    <li className="" ><a href="#"><i className="bx bxs-skull"></i> User</a></li>

                    {NavItems.map((item, index) => {
                        
                        return   (item.cName === "home-nav-links" ? <li className={( item.title === "Home" ? "active" : "")} > <a className={item.cName} href={item.url} ><i className={item.icon}></i> {item.title}</a></li> : null)                                          

                    })}

                    
                </ul>
            </nav>
            <div className='mobile-nav-overly d-lg-none' style={{display:(showMNav ? "block" : "none")}}>

            </div>
        </div>
        
    );
    
}
export default Navi;