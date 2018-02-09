//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp, MdDelete, MdEdit }
  from 'react-icons/lib/md';
import NewComment from './NewComment';

//Content
const Comment = (props) => {
	const { c } = props;

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
						<MdDelete className="btn delete red" />
						<MdEdit className="btn edit yellow" />
					</div>
				</div>
			</div>
		</div>
	);
}

Comment.propTypes = {
  c: PropTypes.object.isRequired,
};

export default Comment
