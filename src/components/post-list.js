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
    <div style={{flexDirection: 'row',flex:1}}>
        <CreatePost setPosts={setPosts}/> 
        {posts.map(post => <PostItem  id = {post.id} pCaption = {post.pCaption} pDate= {post.pDate} pBY={post.pBY} setPosts={setPosts} />)}
        
        {/* <PostItem pID = "001" pCaption = "cap1sfknafn" pDate= "1/1/1" pBY="JD0"/>
        <PostItem pID = "002" pCaption = "cap2djgisdbgsdg" pDate= "1/2/1" pBY="JD1"/>
        <PostItem pID = "003" pCaption = "cap3sadkjngsudgbusdngn" pDate= "1/1/3" pBY="JD2"/> */}

    </div>
    );
    
}
export default PostList;