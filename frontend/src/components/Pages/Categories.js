//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
//Router
import { Link } from 'react-router-dom';
//Components
import '../App.css';
//Content
class Home extends Component {
	componentDidMount(){
		this.props.fetchCategories();
	}
	render() {
		const { categories } = this.props;
		return (
			<div>
				<div className="row">
					<ul>
					{
						categories
							? categories.map(c =>
								<li key={c.path}>
									<Link to={"/category/"+c.path+"/"}>{c.name}</Link>
								</li>)
							: null
					}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ app }) {
  return {
		categories: app.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchCategories: (data) => dispatch(fetchCategories(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
