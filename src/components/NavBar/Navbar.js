import React, { useEffect, useState, useRef } from 'react';

import { NavItems } from './NavItems';

function Navbar (props) {
    const [showMNav, setShowMNav] = useState(false)
    // const [activeLink, setActiveLink] = useState("Main")
    const [navBiGi, setNavBiGi] = useState('fixed-top header-transparent')
    const navRef = useRef()
    navRef.current = navBiGi

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY >320
            if(show){
                setNavBiGi('fixed-top')
            }else{
                setNavBiGi('fixed-top header-transparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
   
    const handleClick = () => {
        setShowMNav(!showMNav)
        props.setMoNav(!showMNav)
    }

    // const handleLinkClick = (name) => {
    //     setActiveLink(name)
    // }    

    return(
        <div>
            <button type="button" className="mobile-nav-toggle d-lg-none" onClick={handleClick}>
                {( !showMNav ? <i className="bx bx-menu"></i> : <i className='bx bxs-x-circle' style={{color:"#050604"}}></i>)}
            </button>
            <header id="header" className={navRef.current}>
                    <div className="container">

                        <div className="logo float-left">
                            <h1 className="text-light"><a href="index.html"><span style={{color : "#888245", fontWeight : 'bolder'}}>TIMPLEYT</span></a></h1>
                        </div>

                        <nav className="nav-menu float-right d-none d-lg-block">
                            <ul className={showMNav ? 'nav-menu active' : 'nav-menu'}>
                                
                                {NavItems.map((item, index) => {
                                    
                                    return (item.dest === "main-nav" ?  <li className={( item.title === "Main" ? "active" : "")} > <a className={item.cName} href={item.url} > {item.title}</a></li> : null)                                         
             
                                })}

                                <li className="drop-down" ><a href="#">User</a>
                                    <ul>
                                        {NavItems.map((item, index) => {
                                            return (item.dest === "sub-main-nav" ?  <li className="" > <a className={item.cName} href={item.url}  >{item.title}</a></li> : null)
                    
                                        })}
                                    </ul>
                                    
                                </li>
                                
                            </ul>
                            
                        </nav>
                        

                    </div>
                </header>

                <nav className="mobile-nav d-lg-none">
                    <ul className={showMNav ? 'nav-menu active' : 'nav-menu'}>
                                    
                        {NavItems.map((item, index) => {
                            
                            return   <li className={( item.title === "Main" ? "active" : "")} > <a className={item.cName} href={item.url} > {item.title}</a></li>                                          
    
                        })}
                        
                        
                    </ul>
                </nav>
                <div className='mobile-nav-overly d-lg-none' style={{display:(showMNav ? "block" : "none")}}>

                </div>
        </div>
       

    );
}

export default Navbar;