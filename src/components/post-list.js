import React, {Component, useEffect, useState, useRef} from 'react';
import PostItem from './post-item';
import CreatePost from '../components/create-post';

function PostList () {
    const [posts, setPosts] = useState([])

    //only run once when component is rendered **This is a persistent data
    useEffect( () => {
        if(localStorage.getItem("tempPostData")){
            setPosts(JSON.parse(localStorage.getItem("tempPostData")))
        } 
      }, [])

    //run every posts state changes
    useEffect( () => {
        localStorage.setItem("tempPostData", JSON.stringify(posts))
    }, [posts])

    return (
    // <div style={{flexDirection: 'row',flex:1}}>
    //     <CreatePost setPosts={setPosts}/> 
    //     {posts.map(post => <PostItem  id = {post.id} pCaption = {post.pCaption} pDate= {post.pDate} pBY={post.pBY} setPosts={setPosts} />)}       


    // </div>
    <section className="service-details">
        <div className="container">
            <div className="row">
                <CreatePost setPosts={setPosts}/>
                {posts.map(post => <PostItem  id = {post.id} pCaption = {post.pCaption} pDate= {post.pDate} pBY={post.pBY} pById={post.pById} setPosts={setPosts} />)}  
            </div>
        </div>
    </section>
    );
    
}
export default PostList;