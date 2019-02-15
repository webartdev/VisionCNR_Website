import React from 'react';

function Button() {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div>
      <button className="buttonNav" >
        <a href="http://webartplus.com" onClick={handleClick}>
          <span className="buttonText">Submit Testimonial</span>
        </a>
      </button>
    </div>

  );
};

export default Button;