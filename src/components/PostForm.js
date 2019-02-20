import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //call action
    this.props.createPost(post);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="imgBg bg-grey text-center">
        <br/>
          <form onSubmit={this.onSubmit}>
            <div>
              <input type="text" 
              placeholder="Name" name="title" 
              onChange={this.onChange} value={this.state.title}
              className="inputStyle" />
            </div>
            <br />
            <div>
              {/* <label>Testimonial/Comment: </label><br /> */}
              <textarea name="body" placeholder="Testimonial/Comment"
                onChange={this.onChange}
                value={this.state.body}
                className="textareaStyle" />
            </div>
            <br />
            <button type="submit">Submit Testimonial</button>
          </form>
        </div>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);


