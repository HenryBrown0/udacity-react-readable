//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { deleteComment, voteComment } from '../../actions/comments';
//components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp, MdDelete, MdEdit }
  from 'react-icons/lib/md';
import EditComment from './EditComment';
//Content
class Comment extends Component {

	deleteComment = event => {
		event.preventDefault();
		this.props.deleteComment(this.props.c);
	}

	voteUp = event => {
		event.preventDefault();
		this.props.voteComment({comment: this.props.c, type: "upVote"})
	}

	voteDown = event => {
		event.preventDefault();
		this.props.voteComment({comment: this.props.c, type: "downVote"})
	}

	render(){
		const { c } = this.props;
		return (
			<div className="card fluid">
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
								onClick={this.voteUp}
								className="btn green"
							/>
							{c.voteScore}
							<MdArrowDropDown
								height="2em"
								width="2em"
								onClick={this.voteDown}
								className="btn red"
							/>
						</div>
						<div className="col-sm-4">
							{new Date(c.timestamp).toDateString()}
						</div>
						<div className="col-sm-4">
							<MdDelete
								onClick={this.deleteComment}
								className="btn delete red"
							/>
							<label htmlFor={`editComment${c.id}`}>
								<MdEdit className="btn edit yellow" />
							</label>

							<input id={`editComment${c.id}`} type="checkbox"/>
							<div className="modal">
							  <div className="card fluid">
							    <label htmlFor={`editComment${c.id}`} className="close"></label>
									<EditComment c={c} />
							  </div>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ comments }) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
		deleteComment: (data) => dispatch(deleteComment(data)),
		voteComment: (data) => dispatch(voteComment(data))
  }
}

Comment.propTypes = {
  c: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
