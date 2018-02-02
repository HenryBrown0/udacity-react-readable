import React from 'react';
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';

const Basic = (props) => {
	const { date, title, body, author, voteScore, commentCount } = props;
	return (
		<div className="card fluid">
			<div className="section left">
				<h3>
					{title}
					<small>- {author}</small>
				</h3>
				<p>{body}</p>
			</div>
			<div className="container section">
				<div className="row">
					<div className="col-sm-4">
						<MdArrowDropUp height="2em" width="2em" className="btn up" />
						{voteScore}
						<MdArrowDropDown height="2em" width="2em" className="btn down" />
					</div>
					<div className="col-sm-4">
					{
						commentCount === 1
						? `${commentCount} comment`
						: `${commentCount} comments`
					}
					</div>
					<div className="col-sm-4">{ date }</div>
				</div>
			</div>
		</div>
  );
}

export default Basic;
