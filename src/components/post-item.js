import React, {Component, useEffect, useState, useRef} from 'react';
import defPostPic from '../assets/img/def-post-img.png';

function PostItem(props)  {
    function handleDelete(){
        props.setPosts(prev => prev.filter(ipost => ipost.id != props.id))
    }

	return (        
    // <div style={{marginTop:10, backgroundColor:'white', padding:10, borderRadius:10}}>

    //     <h4> {props.pBY} , {props.pCaption} , {props.id} , {props.pDate} </h4>
    //     <LikeArea />
    //     <button onClick={handleDelete}>Delete</button>

    // </div>

    <div className="col-md-12 d-flex align-items-stretch " style={{marginTop:20,borderRadius:10}}>
        <div className="card" style={{backgroundColor:"#888245"}}>
          <div className="card-img ">
      
            <img className="img-fluid w-100" src={defPostPic} alt="..." />
            <button onClick={handleDelete} style={{position:'absolute', top:"5px", right:'10px', borderColor:"transparent", backgroundColor: "transparent", color:"#47410c", fontSize:22}}><i className='bx bxs-trash' ></i></button>            
          </div>
          <div className="card-body" >
            <span className="badge badge-success" style={{float:'right', color:"#030304"}}  >{props.pDate}</span>
            <h5 className="" ><a href="#" style={{color:'#050604'}}>{props.pBY} {props.pById}</a></h5>
            
            <p className="card-text"> {props.pCaption} </p>
            <div className="read-more">
                <LikeArea />
            </div>
          </div>
        </div>
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
      <div style={{justifyContent:'space-evenly'}}>

         
          {likeCount}
          <button onClick={increaseLikeHandler} className="btn " type="button" style={{borderColor:'transparent', backgroundColor:'transparent', marginLeft:10 ,marginRight:8, padding:0, }} ><i className='bx bxs-like'></i></button>
          
          <button onClick={decreaseLikeHandler} className="btn  " type="button" style={{borderColor:'transparent', backgroundColor:'transparent', marginRight:8, padding:0, }}><i className='bx bxs-dislike' ></i></button>
          <a href="#" style={{ position: "absolute", bottom: "8px", right: "50px", }}><i class="icofont-arrow-right" style={{fontSize:22, }}></i> Details</a>
          

      </div>
      
    )
  }


export default PostItem;