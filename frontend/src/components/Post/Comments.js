//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { fetchPostComments, addPostComment } from '../../actions/comments';
//components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';

//Content
class Comments extends Component {
	state = {
    order: 'dateNewest',
		author: '',
		body: '',
		disabled: false
  };

	componentDidMount(){
		this.props.fetchPostComments(this.props.postID);
	};

	handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

	dateNewest = (a, b) => {
		return b.timestamp  - a.timestamp;
	};

	dateOldest = (a, b) => {
		return a.timestamp  - b.timestamp;
	};

	voteHighest = (a, b) => {
		return b.voteScore  - a.voteScore;
	};

	voteLowest = (a, b) => {
		return a.voteScore  - b.voteScore;
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
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx4xxxyxxxxxxxxxxx'.replace(/[xy]/g, function (c)  {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
	}
	newComment = event => {
		event.preventDefault();
		this.setState({
			disabled: true
		});
		let { author, body } = this.state;
		author = this.escapeString(author);
		body = this.escapeString(body);

		if(author && body){
			const payload = {
				id: this.generateUUID(),
				parentId: this.props.postID,
				timestamp: new Date().getTime(),
				body,
		    author,
			};

			this.props.addPostComment(payload);
		}
	};

	render(){
		const { comments, postID } = this.props;
		const { order, author, body, disabled } = this.state;

		return (
			<div>
				<form>
					<fieldset>
						<legend>New Comment</legend>
						<div className="input-group fluid">
							<input
								type="text"
								value={author}
								name="author"
								onChange={this.handleChange}
								placeholder="Author"
								disabled={disabled}
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
					<fieldset>
						<legend>Order By</legend>
						<div className="input-group vertical">
							<select
								id="orderBy"
								value={order}
								name="order"
		          	onChange={this.handleChange}
							>
								<option value="dateNewest">Date [newest]</option>
								<option value="dateOldest">Date [oldest]</option>
								<option value="voteHighest">Vote [hightest]</option>
								<option value="voteLowest">Vote [lowest]</option>
							</select>
						</div>
					</fieldset>
					<fieldset>
						<legend>Comments</legend>
					{
						comments[postID] ? comments[postID].length !== 0 ?
							comments[postID].sort(this[order]).map(c =>
								<div className="card fluid" key={c.id}>
									<div className="section left">
										<p>{c.author}</p>
										<p>{c.body}</p>
									</div>
									<div className="container section">
										<div className="row">
											<div className="col-sm-4">
												<MdArrowDropUp
													height="2em"
													width="2em"
													className="btn up"
												/>
												{c.voteScore}
												<MdArrowDropDown
													height="2em"
													width="2em"
													className="btn down"
												/>
											</div>
											<div className="col-sm-4">
												{new Date(c.timestamp).toDateString()}
											</div>
											<div className="col-sm-4">
											</div>
										</div>
									</div>
								</div>
							)
						: <p>No comments</p> : <p>No comments</p>
					}
					</fieldset>
				</form>
			</div>
		);
	}
}

function mapStateToProps ({ comments }) {
  return {
		comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchPostComments: (data) => dispatch(fetchPostComments(data)),
		addPostComment: (data) => dispatch(addPostComment(data))
  }
}

Comments.propTypes = {
  postID: PropTypes.string.isRequired,
	comments: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
