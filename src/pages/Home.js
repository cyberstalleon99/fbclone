import React, { useState } from 'react';

import Navi from '../components/navi';
import CreatePost from '../components/create-post';
import PostList from '../components/post-list';
import HomeShortcuts from '../components/home-shortcuts';
import HomeNotifs from '../components/home-notifs';
import HomeMsgs from '../components/home-msgs';

function Welcome () {
    const [moNaActv, setMoNaActv] = useState(false)
    
    return (
        <div className={moNaActv ? "mobile-nav-active" : ""}>
            
            <Navi setMoNav={setMoNaActv}/>

            {/* <section className="breadcrumbs" style={{marginTop:80}}>

                <div className="container">
                    <CreatePost setPosts={setPosts}/>
                </div>

            </section> */}

            <section className="blog">
                <div className="container">
                    <div className="row" style={{marginTop:60}}>

                        <div className="col-lg-8 entries">
                            <PostList />
                        </div>

                        <div className="col-lg-4" style={{marginTop:15}}>
                            {/* <HomeNotifs /> */}
                            <HomeShortcuts />
                        </div>

                    </div>
                </div>
            </section>

            
        </div>
        
        
        );
    
}
export default Welcome;