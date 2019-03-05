import React from 'react';

// NB: all the classname=... is just styling!
// using the Semantic UI library 
const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.imgSrc} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.when}</span>
                </div>
                <div className="text">{props.bodyText}</div>
            </div>
        </div>
    );  
}

export default CommentDetail;  

  
