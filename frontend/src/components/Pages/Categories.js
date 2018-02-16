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
class Categories extends Component {
	componentDidMount(){
		this.props.fetchCategories();
	}
	render() {
		const { categories } = this.props;
		return (
			<div className="row center">
				<div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3
					col-lg-offset-4">
				{
					categories ? categories.map(c =>
						<Link key={c.path} to={"/category/"+c.path+"/"} className="button">
							{c.name}
						</Link>
					) : null
				}
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
)(Categories)
