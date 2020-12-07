import React, {Component, useEffect, useState, useRef} from 'react';

import FilePondEr from './fileponder';

function CreatePost(props) {
    const[pCaption, setPcaption] = useState()
    // const[pDate, setPdate] = useState()
    // const[pBY, setPby] = useState()
    // const[pById, setPbyId] = useState()

    function handleSubmit(e){
        e.preventDefault()
        const currDate = new Date().toLocaleString()

        props.setPosts(prev => prev.concat({pBY:"Firtname Lastname", pById: "uid-hidden-sample-001", pCaption, pDate: currDate, id: Date.now()}))
        // setPby("")
        // setPdate("")
        setPcaption("")
      }

    return (
        <section className="breadcrumbs col-md-12 d-flex" >

            <div className="container">
                <div>
                <FilePondEr />
                </div>
                <sup>New Post:</sup>
                <div className="d-flex justify-content-center align-items-center ">
                    
                    
                    <form onSubmit={handleSubmit} className="form-inline col-12">
                            
                        
                        <input className="form-control col-10" value={pCaption} onChange={e => setPcaption(e.target.value)}  placeholder="Caption"  />
                        
                        <div className="input-group-append col-2">
                            <button className="btn btn-primary"  >Post</button>
                        </div>

                    </form>

                    

                </div>
            </div>

        </section>

    
    );
    
}
export default CreatePost;