//React
import React from 'react';
//Router
import { Link } from 'react-router-dom';
//Components
import './App.css';

const Header = (props) => {
	return (
		<header>
			<Link to="/"><button>Home</button></Link>
		  <Link to="/categories/"><button>Categories</button></Link>
			<Link to="../../new/post/">
				<button className="primary">New post</button>
			</Link>
		</header>
	);
}

export default Header;
