//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { fetchPostComments } from '../../actions/comments';
//components
import '../App.css';
import NewComment from './NewComment';
import Comment from './Comment';

//Content
class Container extends Component {
	state = {
    order: 'dateNewest',
  };

	componentDidMount(){
		this.props.fetchPostComments(this.props.postID);
	};

	handleChange = event => {
    this.setState({ order: event.target.value });
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

	render(){
		const { comments, postID } = this.props;
		const { order } = this.state;

		return (
			<div>
				<form>
					<NewComment parentId={postID} />
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
						comments[postID] ? comments[postID].length > 0 ?
							comments[postID].sort(this[order]).map(c =>
								<Comment key={c.id} c={c} />
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
  }
}

Container.propTypes = {
  postID: PropTypes.string.isRequired,
	comments: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
