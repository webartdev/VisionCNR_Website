import React from 'react';
import Posts from './Post';
import PostForm from './PostForm';

const Testimonials = () => (
    <div className="container-fluid">
        <span className="titleMain">
            Add Testimonial
    </span>
        <div className="container-fluid" style={{color:'#336699', padding:10}}>
            <PostForm />
            <hr />
            <Posts />
        </div>
    </div>
);

export default Testimonials;
