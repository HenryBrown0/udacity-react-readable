//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { editPost } from '../../actions/posts';
//components
import '../App.css';
//Content
class EditPost extends Component {
	state = {
		title: '',
    body: ''
  };

	componentDidMount(){
		this.setState({
			title: this.props.p.title,
			body: this.props.p.body
		})
	};

	handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

	editPost = event => {
		event.preventDefault();
		this.props.editPost({
			id: this.props.p.id,
			title: this.state.title,
			body: this.state.body
		})
	};

	render(){
		const { p } = this.props;
		const { title, body } = this.state;

		return (
			<div>
				<form>
					<fieldset>
						<legend>Edit Post</legend>
						<div className="section left">
							<h3>
								<div className="input-group fluid">
									<input
										type="text"
										value={title}
										name="title"
										onChange={this.handleChange}
									/>
								</div>
								<small>- {p.author}</small>
							</h3>
							<div className="input-group fluid">
			          <textarea
			            rows="3"
			            value={body}
			            name="body"
			            onChange={this.handleChange}
			          />
			        </div>
						</div>

						<div className="input-group vertical">
							<button className="primary" onClick={this.editPost}>
								Update
							</button>
						</div>
					</fieldset>
				</form>
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
		editPost: (data) => dispatch(editPost(data))
  }
}

editPost.propTypes = {
	p: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
