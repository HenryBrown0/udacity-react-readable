//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { fetchPostComments } from '../../actions/comments';
//components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp, MdDelete, MdEdit }
  from 'react-icons/lib/md';
import NewComment from './NewComment';

//Content
class Comments extends Component {
  state:{
    order:
  }
	componentDidMount(){
		this.props.fetchPostComments(this.props.postID);
    console.log(this.props.order)
	};
	render(){
		const { comments, postID, order } = this.props;

		return (
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
										<MdDelete className="btn delete red" />
										<MdEdit className="btn edit yellow" />
									</div>
								</div>
							</div>
						</div>
					)
				: <p>No comments</p> : <p>No comments</p>
			}
			</fieldset>
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
