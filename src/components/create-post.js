import React, {Component, useEffect, useState, useRef} from 'react';

import FilePondEr from './fileponder';

function CreatePost(props) {
    const[pCaption, setPcaption] = useState()
    const[pDate, setPdate] = useState()
    const[pBY, setPby] = useState()

    function handleSubmit(e){
        e.preventDefault()
       // alert("form submitted")
        props.setPosts(prev => prev.concat({pBY, pCaption, pDate, id: Date.now()}))
        setPby("")
        setPdate("")
        setPcaption("")
      }

    return (
        <section className="breadcrumbs" >

            <div className="container">
                <div>
                <FilePondEr />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    

                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Add New Post</legend>
                            <input value={pBY} onChange={e => setPby(e.target.value)} placeholder="Name" />
                            <input value={pCaption} onChange={e => setPcaption(e.target.value)}  placeholder="Caption" />
                            <input value={pDate} onChange={e => setPdate(e.target.value)}  placeholder="Date" />
                            <button>Post</button>
                        </fieldset>
                    </form>

                </div>
            </div>

        </section>

    
    );
    
}
export default CreatePost;