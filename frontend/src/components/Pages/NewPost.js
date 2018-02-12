//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
import { addPost } from '../../actions/posts';
//components
import '../App.css';
//Content
class NewPost extends Component {
	state = {
		title: '',
		author: '',
		body: '',
		category: '',
  };

	componentDidMount(){
		this.props.fetchCategories();
	};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  escapeString = text => {
		const map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};
		return text.trim().replace(/[&<>"']/g, function(m) { return map[m]; });
	};

  generateUUID = () => {
    let d = new Date().getTime();
    if(typeof performance !== 'undefined'
      && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx4xxxyxxxxxxxxxxx'.replace(/[xy]/g, function (c)  {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
	};

  newPost = event => {
		event.preventDefault();
		const title = this.escapeString(this.state.title);
		const author = this.escapeString(this.state.author);
		const body = this.escapeString(this.state.body);
		const category = this.escapeString(this.state.category);

		if(title && author && body && category){
			const payload = {
				id: this.generateUUID(),
				timestamp: new Date().getTime(),
				title,
				body,
		    author,
				category,
			};
			this.props.addPost(payload);
		}
	};

  render(){
    const { title, author, body, category } = this.state;
		const { categories } = this.props;
    return(
      <fieldset>
        <legend>New Post</legend>
				<div className="input-group fluid">
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
            placeholder="Title"
          />
        </div>
        <div className="input-group fluid">
          <input
            type="text"
            value={author}
            name="author"
            onChange={this.handleChange}
            placeholder="Author"
          />
        </div>
        <div className="input-group fluid">
          <textarea
            rows="3"
            value={body}
            name="body"
            onChange={this.handleChange}
            placeholder="Body"
          />
        </div>
				<div className="input-group vertical">
					<select
						id="category"
						value={category}
						name="category"
						onChange={this.handleChange}
					>
						<option value="" defaultValue>Category</option>
					{
						categories ? categories.map(c => (
							<option key={c.path} value={c.path}>{c.name}</option>
						)) : null
					}
					</select>
				</div>
        <div className="input-group vertical">
          <button onClick={this.newPost}>Submit</button>
        </div>
      </fieldset>
    )
  }
}

function mapStateToProps ({ app }) {
  return {
		categories: app.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchCategories: (data) => dispatch(fetchCategories(data)),
		addPost: (data) => dispatch(addPost(data))
  }
}

NewPost.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
