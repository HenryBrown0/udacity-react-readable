//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategoryPosts } from '../../actions/posts';
//Components
import '../App.css';
import CategoryPanel from './CategoryPanel';
//Content
const GetCategory = (props) => {
	props.fetchCategoryPosts(props.category);
	const { category } = props;
	return (<CategoryPanel category={category} />);
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
