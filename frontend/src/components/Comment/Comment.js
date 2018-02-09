//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comments';
//components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp, MdDelete, MdEdit }
  from 'react-icons/lib/md';

//Content
class Comment extends Component {

	deleteComment = event => {
		event.preventDefault();
		console.log(this.props.c.id)
		this.props.deleteComment(this.props.c);
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
								className="btn green"
							/>
							{c.voteScore}
							<MdArrowDropDown
								height="2em"
								width="2em"
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
							<MdEdit className="btn edit yellow" />
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
		deleteComment: (data) => dispatch(deleteComment(data))
  }
}

Comment.propTypes = {
  c: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
