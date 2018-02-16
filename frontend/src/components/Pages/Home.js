//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
//Router
import { Link } from 'react-router-dom';
//Components
import '../App.css';
import GetCategory from '../Category/GetCategory';
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
				{
					categories ? categories.map(c =>
						<div key={c.path} className="col-sm-12 col-md-6 col-lg-4">
							<h2>
								{c.name}
								<small>
									<Link to={"category/"+c.path+"/"}>View category individually</Link>
								</small>
							</h2>
							<GetCategory category={c.name} />
						</div>
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
		fetchCategories: (data) => dispatch(fetchCategories(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
