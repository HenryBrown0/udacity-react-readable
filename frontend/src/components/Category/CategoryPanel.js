//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//components
import '../App.css';
import BasicPost from '../Post/Basic';

//Content
class CategoryPanel extends Component {
	state = {
    order: 'dateNewest',
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

		const { category, posts } = this.props;
		const categoryPosts = posts[category] ? posts[category].length !== 0
			? posts[category].filter(p => p.category === category)
			: [] : []

		const { order } = this.state;

		return (
			<div>
				<form>
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
				</form>
				{
					categoryPosts.length !== 0 ?
						categoryPosts.sort(this[order]).map(p =>
							<BasicPost key={p.id} post={p} />
						)
					: <p>No posts</p>
				}
			</div>
		);
	}
}

function mapStateToProps ({ posts }) {
  return {
		posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel)
