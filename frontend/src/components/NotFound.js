import React from 'react';
import './App.css';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';

const NotFound = (props) => {
	const { date, title, body, author, voteScore, commentCount } = props;
	return (
		<div className="row">
			<div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3
				col-lg-offset-4">
				<div className="card fluid">
					<div className="section">
						<h3>404 Error</h3>
						<p>Page not found</p>
					</div>
				</div>
			</div>
		</div>
  );
}

export default NotFound;
