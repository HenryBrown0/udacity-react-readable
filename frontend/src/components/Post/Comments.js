//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { fetchPostComments } from '../../actions/comments';
//components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';

//Content
class Comments extends Component {
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
					<fieldset>
						<legend>Comments</legend>
						<div className="input-group vertical">
							<label htmlFor="orderBy">Order By</label>
							<select
								id="orderBy"
								value={order}
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
						: <p>No comments</p> :
						<div>
							<div class="spinner-donut"></div>
							<p>Loading comments</p>
						</div>
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
		fetchPostComments: (data) => dispatch(fetchPostComments(data))
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
