import React, {Component} from 'react';

import feat1 from '../assets/img/features-1.svg';
import feat2 from '../assets/img/features-2.svg';
import feat3 from '../assets/img/features-3.svg';
import feat4 from '../assets/img/features-4.svg';


class Welcome extends Component {
    render() {
	    return (
            <div>

            <header id="header" className="fixed-top header-transparent">
                <div className="container">
    
                    <div className="logo float-left">
                        <h1 className="text-light"><a href="index.html"><span style={{color : "#888245", fontWeight : 'bolder'}}>TIMPLEYT</span></a></h1>
                    </div>
    
                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Main</a></li>
                            <li ><a href="index.html">About</a></li>
                            <li className="drop-down"><a href="">User</a>
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Registration</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
    
                </div>
            </header>
    
            
            <section id="hero" className="d-flex justify-cntent-center align-items-center">
                <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">
    
                
                <div className="carousel-item active">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown" style={{color:'#BBB683 '}} >Welcome!</h2>
                        <p className="animate__animated animate__fadeInUp" style={{color:'#888245'}} >
                           <span>Watch ____ videos for free, here on ____.com. Discover the growing collection of high quality Most Relevant YYY movies and clips.</span><hr/> 
                           </p>
                        {/* <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a> */}
                    </div>
                </div>
    
                
                {/* <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                        <p className="animate__animated animate__fadeInUp">Ut mque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                </div> */} 
               
                {/* <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
    
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
    
                </div>
            </section>
    
            <main id="main">
    
                
                <section className="services" style={{backgroundColor: "#BBB683"}}>
                    <div className="container" >
    
                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                                <div className="icon-box icon-box-cyan">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4 className="title"><a href="">Team Project</a></h4>
                                <p className="description">Voluptatum on provident</p>
                                </div>
                            </div>
    
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                                <div className="icon-box icon-box-blue">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4 className="title"><a href="">File Sharing</a></h4>
                                <p className="description">Duis aute irum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
    
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                                <div className="icon-box icon-box-green">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4 className="title"><a href="">Statistics</a></h4>
                                <p className="description">Excepteur nim id est laborum</p>
                                </div>
                            </div>
    
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                                <div className="icon-box icon-box-pink">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4 className="title"><a href="">Access</a></h4>
                                <p className="description">Anywhere, Woroldwide . . .</p>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                </section>
    
            
                
    
            
                <section className="features">
                    <div className="container">
    
                        <div className="section-title">
                        <h2>Goals</h2>
                        <p>Magnam dolores piditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
    
                        <div className="row" >
                            <div className="col-md-5">
                                <img src={feat1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-4">
                                <h3>Knowledge Sharing.</h3>
                                <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                                </p>
                                <ul>
                                <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="row" >
                            <div className="col-md-5 order-1 order-md-2">
                                <img src={feat2} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">
                                <h3>Self Evaluation.</h3>
                                <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                                </p>
                                <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
    
                        <div className="row" >
                            <div className="col-md-5">
                                <img src={feat3} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>Skills Integration.</h3>
                                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                                <ul>
                                <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="icofont-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="row" >
                            <div className="col-md-5 order-1 order-md-2">
                                <img src={feat4} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">
                                <h3>Team Commitment</h3>
                                <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                                </p>
                                <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
    
                    </div>
                </section>
    
            </main>
    
            
            <footer id="footer" >
                <div className="container">
                    <div className="copyright">&copy; Copyright <strong><span>BakaMayFuture</span></strong>. All Rights Reserved</div>
                </div>
            </footer>
            
        </div> 
         
         );
    }
}
export default Welcome;