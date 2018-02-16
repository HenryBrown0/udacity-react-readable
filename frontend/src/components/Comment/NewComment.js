//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { addComment } from '../../actions/comments';
//components
import '../App.css';
//Content
class NewComment extends Component {
	state = {
		author: '',
		body: '',
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

	/*
		uuid from:
		https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	*/
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

  newComment = event => {
		event.preventDefault();
		const author = this.escapeString(this.state.author);
		const body = this.escapeString(this.state.body);

		if(author && body){
			const payload = {
				id: this.generateUUID(),
				parentId: this.props.parentId,
				timestamp: new Date().getTime(),
				body,
		    author,
			};
			this.props.addComment(payload);
		}
	};

  render(){
    const { author, body } = this.state;
    return(
      <fieldset>
        <legend>New Comment</legend>
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
          <button onClick={this.newComment}>Submit</button>
        </div>
      </fieldset>
    )
  }
}

function mapStateToProps ({ comments }) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
		addComment: (data) => dispatch(addComment(data))
  }
}

NewComment.propTypes = {
  parentId: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment)
