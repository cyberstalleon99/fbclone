import React, {Component, useEffect, useState, useRef} from 'react';


function PostItem(props)  {
    function handleDelete(){
        props.setPosts(prev => prev.filter(ipost => ipost.id != props.id))
    }

	return (        
    <div style={{marginTop:10, backgroundColor:'white', padding:10, borderRadius:10}}>

        <h4> {props.pBY} , {props.pCaption} , {props.id} , {props.pDate} </h4>
        <LikeArea />
        <button onClick={handleDelete}>Delete</button>

    </div>
    
    );
    
}

function LikeArea(){
    const [likeCount, setLikeCount] = useState(0)
    
    function increaseLikeHandler(){
      //alert("Thanks for liking")
      setLikeCount(function(prev){
        return prev + 1
      })
    }
    
    function decreaseLikeHandler(){
      //alert("Thanks for liking")
      setLikeCount(prev =>{
        if(prev > 0){
          return prev - 1
        }
        return 0 //if <= 0
      })
    }
    
    return(
      <>
        <button onClick={increaseLikeHandler}>Like</button>
        <button onClick={decreaseLikeHandler}>Dislike</button>
        <p>This page has been liked {likeCount} times</p>
      </>
    )
  }


export default PostItem;