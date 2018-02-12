//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { editComment } from '../../actions/comments';
//components
import '../App.css';
//Content
class EditComment extends Component {
	state = {
    body: '',
  };

	componentDidMount(){
		this.setState({ body: this.props.c.body })
	};

	handleChange = event => {
    this.setState({ body: event.target.value });
  };

	editComment = event => {
		event.preventDefault();
		this.props.editComment({
			id: this.props.c.id,
			timestamp: new Date().getTime(),
			body: this.state.body
		})
	};

	render(){
		const { c } = this.props;
		const { body } = this.state;

		return (
			<div>
				<form>
					<fieldset>
						<legend>Edit Comment</legend>
						<div className="section left">
							<p>Author: {c.author}</p>
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
							<button className="primary" onClick={this.editComment}>
								Update
							</button>
						</div>
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
		editComment: (data) => dispatch(editComment(data)),
  }
}

EditComment.propTypes = {
	c: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComment)
