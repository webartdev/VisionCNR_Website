import React from 'react';
import Posts from './Post';
import PostForm from './PostForm';

const Testimonials = () => (
    <div className="containerMain"><span className="titleMain">
        Add Testimonial
    </span>
        <PostForm />
        <hr />
        <Posts />
    </div>
);

export default Testimonials;
