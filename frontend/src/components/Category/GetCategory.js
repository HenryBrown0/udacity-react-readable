//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategoryPosts } from '../../actions';
//Router
import { Link } from 'react-router-dom';
//Components
import '../App.css';
import CategoryPanel from './CategoryPanel';
//Content
class GetCategory extends Component {
	componentDidMount(){
		this.props.fetchCategoryPosts(this.props.category);
	}
	render() {
		const { category } = this.props;
		return (<CategoryPanel category={category} />);
	}
}

function mapStateToProps ({ posts }) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchCategoryPosts: (data) => dispatch(fetchCategoryPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetCategory)
